const User = require('mongoose').model('User');
const jwt = require('jsonwebtoken');
const dbConfig = require('../../db-config');

module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];

  if (token !== null) {
    return jwt.verify(token, dbConfig.jwtSecret, (err, decoded) => {
      if (err || !decoded) {
        return res.status(401).json({
          tokenExpired: true,
        });
      }

      const query = {
        _id: decoded.id,
      };

      return User.findOne(query, (err, user) => {
        if (err || !user) {
          return res.status(401).end();
        } else {

          req.body.id = user._id;
          req.body.username = user.username;
          req.body.email = user.email;
          req.body.isAdmin = user.isAdmin;

          return next();
        }
      });
    });
  }

  return next();
};
