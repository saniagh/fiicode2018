const Ddos = require('ddos');
const ddos = new Ddos({ burst: 100, limit: 2000 });
const compression = require('compression');
const express = require('express');
const app = express();

app.use(compression());
app.use(ddos.express);

const passport = require('passport');
const dbConfig = require('./db-config');
const bodyParser = require('body-parser');

const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

require('./res/db-models').connect(dbConfig.dbUri);

const CronJobModel = require('mongoose').model('CronJobModel');
const nodemailer = require('nodemailer');
const CronJob = require('cron').CronJob;

app.use(express.static('./res/index/'));
app.use(express.static('./public/'));
app.use(bodyParser.urlencoded({ extended: false, limit: '200000kb' }));

const authRoutes = require('./res/handlers/auth');
const signupPassport = require('./res/auth/signup');
const loginPassport = require('./res/auth/login');
app.use(passport.initialize());
passport.use('signup', signupPassport);
passport.use('login', loginPassport);
app.use('/authentication', authRoutes);

const allergiesRouter = require('./res/handlers/allergies.js');

app.use('/allergies', allergiesRouter);

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/res' + '/index' + '/index.html');
});

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'valentinfiicode2018@gmail.com',
    pass: 'Fiicode@2018PleaseDoNotAbuse',
  },
});

server.listen(8080, function () {
  // In case the server crashed we need to restore all running cron jobs
  // We've previously saved them in our database so we'll just pull them from there

  CronJobModel.find({}, (err, jobs) => {
    if (err) {
      return res.status(400).json({
        message: 'Internal error',
      });
    }

    if (jobs.length !== 0) {
      jobs.map((job) => {
        job.jobParticipants.map((participant) => {

          let timedJob = new CronJob(new Date(job.jobTime), () => {
            const mailOptions = {
              from: 'valentinfiicode2018@gmail.com',
              to: participant.participantEmailAddress,
              subject: `Allergy Storm Alert From - ${job.jobTitle} ${job.jobMotto ?
                  job.jobMotto :
                  ''}`,
              html: `<div style="font-family: Roboto, sans-serif;">${participant.participantFullName ?
                  `<h1 style="font-size:1.75em;">Mr/Mrs ${participant.participantFullName},</h1>` :
                  `<h1>Attention ${participant.participantEmailAddress},</h1>`}<p>You have chosen to be mailed now about the following allergy: <i>${job.jobAllergyName}</i></p>${job.jobDescription ?
                  `<p>This is the message you wanted to be reminded of: <i>${job.jobDescription}</i></p>` :
                  ''}<p>Find more info here: <i><a href=${job.jobLink}>Group's page</a></i></p></div>`,
            };

            transporter.sendMail(mailOptions, function (err, info) {
              if (err)
                console.log(err);
              else {
                console.log(info);

                CronJobModel.deleteMany({
                  $and: [
                    { jobAllergyName: { $eq: job.jobAllergyName } },
                    { jobLink: { $eq: job.jobLink } },
                  ],
                }, () => {
                });
              }
            });
          }, () => {
          }, false);
          timedJob.start();
        });
      });
    }
  });

});
