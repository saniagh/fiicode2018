const mongoose = require('mongoose');

module.exports.connect = (dbUri) => {
  mongoose.connect(dbUri);

  mongoose.Promise = global.Promise;

  mongoose.connection.on('error', (err) => {
    console.log(
        `The following error has occurred when trying to connect to MongoDB: ${err}`);
    process.exit(1);
  });

  require('./models/users.js');
};
