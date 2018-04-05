const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    index: { unique: true },
  },
  email: {
    type: String,
    index: { unique: true },
  },
  password: {
    type: String,
  },
  registerDate: {
    type: Date,
    default: Date.now(),
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

UserSchema.methods.validatePassword = function validatePassword(
    password, callback) {
  bcrypt.compare(password, this.password, callback);
};

UserSchema.pre('save', function saveHook(next) {
  const _this = this; // _this is equivalent to user

  if (!_this.isModified('password')) return next();

  return bcrypt.genSalt((saltErr, salt) => {
    if (saltErr) {
      return next(saltErr);
    }

    return bcrypt.hash(_this.password, salt, (hashErr, hash) => {
      if (hashErr) {
        return next(hashErr);
      }

      _this.password = hash;

      return next();
    });
  });
});

module.exports = mongoose.model('User', UserSchema);
