const mongoose = require('mongoose');

const AllergiesSchema = new mongoose.Schema({
  species: {
    type: String,
  },
  common: {
    type: String,
  },
  iuisAllergen: {
    type: String,
  },
  type: {
    type: String,
  },
  group: {
    type: String,
  },
  length: {
    type: String,
  },
  accession: {
    type: String,
  },
  gi: {
    type: String,
  },
  firstVersion: {
    type: String,
  },
  isGeneralAllergy: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Allergies', AllergiesSchema);
