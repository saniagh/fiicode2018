const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
  groupName: {
    type: String,
  },
  groupMotto: {
    type: String,
  },
  groupMessage: {
    type: String,
  },
  allergiesOptedFor: {
    type: Array,
  },
  shareLinkEnabled: {
    type: Boolean,
  },
  shareLink: {
    type: String,
  },
  shareLinkExpiresAt: {
    type: String,
  },
  allowGroupChat: {
    type: Boolean,
  },
  ownerEmailAddress: {
    type: String,
  },
  ownerFullName: {
    type: String,
  },
  participants: {
    type: Array,
  },
  passCode: {
    type: String,
  },
});

module.exports = mongoose.model('Group', GroupSchema);
