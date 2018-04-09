const Allergies = require('mongoose').model('Allergies');
const Group = require('mongoose').model('Group');
const express = require('express');

const router = new express.Router();

const createGroupFormValidation = require(
    '../middleware/group-form-validation.js',
);

router.post('/delete-me', (req, res) => {
  const allergies = JSON.parse(req.body.allergies);

  allergies.map((allergy) => {
    const allergyData = {
      species: allergy.Species,
      common: allergy.Common,
      iuisAllergen: allergy['IUIS Allergen'],
      type: allergy.Type,
      group: allergy['Group*'],
      length: allergy.Length,
      accession: allergy.Accession,
      gi: allergy['GI#@'],
      firstVersion: allergy['First Version'],
    };

    const newAllergy = new Allergies(allergyData);
    newAllergy.save((err) => {
    });

  });

  return res.json({
    success: true,
  });
});

router.get('/get-allergies', (req, res) => {
  Allergies.find({}, (err, allergies) => {
    if (err) {
      res.status(400);
    } else if (!allergies)
      res.status(404);
    else res.json({
        allergies: allergies,
      });
  });
});

router.post('/save-group', createGroupFormValidation, (req, res) => {
  if (!req.body.success)
    return res.status(400).json({
      message: req.body.message,
      success: false,
    });

  // modify here for when the app is online

  let currentTime = Date.now();
  let expireTime = currentTime + 86400000;

  let shareLink = 'localhost/group-invite/' + currentTime;

  const groupData = {
    groupName: req.body.groupName,
    groupMotto: req.body.groupMotto,
    allergiesOptedFor: JSON.parse(req.body.allergiesOptedFor),
    shareLinkEnabled: req.body.shareLinkExists,
    shareLink: req.body.shareLinkExists ? shareLink : '',
    shareLinkExpiresAt: req.body.shareLinkExpires ? expireTime : '',
    allowGroupChat: req.body.allowGroupChat,
    ownerEmailAddress: req.body.ownerEmailAddress,
    ownerFullName: req.body.ownerFullName,
    participants: JSON.parse(req.body.participants),
  };

  const newGroup = new Group(groupData);
  newGroup.save((err) => {
    if (err) {
      console.log(err);
    }

    return res.json({
      success: true,
    });
  });
});

module.exports = router;
