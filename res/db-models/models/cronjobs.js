const mongoose = require('mongoose');

const CronJobSchema = new mongoose.Schema({
  jobTime: {
    type: String,
  },
  jobParticipants: {
    type: Array,
  },
  jobTitle: {
    type: String,
  },
  jobAllergyName: {
    type: String,
  },
  jobMotto: {
    type: String,
  },
  jobDescription: {
    type: String,
  },
  jobLink: {
    type: String,
  },
});

module.exports = mongoose.model('CronJobModel', CronJobSchema);
