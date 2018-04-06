const express = require('express');
const app = express();

const passport = require('passport');
const dbConfig = require('./db-config');
const bodyParser = require('body-parser');

const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

require('./res/db-models').connect(dbConfig.dbUri);

app.use(express.static('./res/index/'));
app.use(express.static('./public/'));
app.use(bodyParser.urlencoded({ extended: false, limit: '20000kb' }));

const authRoutes = require('./res/handlers/auth');
const signupPassport = require('./res/auth/signup');
const loginPassport = require('./res/auth/login');
app.use(passport.initialize());
passport.use('signup', signupPassport);
passport.use('login', loginPassport);
app.use('/authentication', authRoutes);

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/res' + '/index' + '/index.html');
});

server.listen(8080);
