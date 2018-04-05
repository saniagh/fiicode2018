const User = require('mongoose').model('User');
const PassportLocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
const dbConfig = require('../../db-config');

module.exports = new PassportLocalStrategy({
  username: 'username',
  password: 'password',
  session: false,
  passReqToCallback: true,
}, (req, username, password, done) => {

  const user = {
    username: req.body.username.trim(),
    email: req.body.email.trim(),
    password: req.body.password.trim(),
    registerDate: Date.now(),
    isAdmin: false,
  };

  const newUser = new User(user);
  newUser.save((err) => {
    if (err) {
      return done(err);
    }

    User.findOne({ username: req.body.username.trim() }, (err, user) => {
      const payload = {
        id: user._id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
      };
      const token = jwt.sign(payload, dbConfig.jwtSecret,
          { expiresIn: 7200 * 12 });

      return done(null, token);
    });
  });
});
