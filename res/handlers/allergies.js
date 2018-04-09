const Allergies = require('mongoose').model('Allergies');
const Group = require('mongoose').model('Group');
const express = require('express');
const uuid = require('uuid');

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

  let expireTime = '';
  let shareLink = '';

  if (req.body.shareLinkExists === 'true') {
    let currentTime = Date.now();

    if (req.body.shareLinkExpires === 'true')
      expireTime = currentTime + 86400000;

    shareLink = 'localhost/group-invite/' + uuid.v4();
  }

  const groupData = {
    groupName: req.body.groupName,
    groupMotto: req.body.groupMotto,
    groupMessage: req.body.groupMessage,
    allergiesOptedFor: JSON.parse(req.body.allergiesOptedFor),
    shareLinkEnabled: req.body.shareLinkExists,
    shareLink: req.body.shareLinkExists ? shareLink : '',
    shareLinkExpiresAt: req.body.shareLinkExpires ? expireTime : '',
    allowGroupChat: req.body.allowGroupChat,
    ownerEmailAddress: req.body.ownerEmailAddress,
    ownerFullName: req.body.ownerFullName,
    participants: JSON.parse(req.body.participants),
    passCode: uuid.v4(),
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

router.post('/get-group', (req, res) => {
  Group.find(
      { $and: [{ passCode: req.body.passCode }, { _id: req.body.groupId }] },
      (err, group) => {
        if (err) {
          return res.status(400).json({
            message: 'Internal error',
          });
        }

        if (group.length === 0) {
          return res.status(404).json({
            message: 'Group not found',
          });
        }

        return res.json({
          group: group,
          success: true,
        });
      });
});

router.get('/save-custom-allergy', (req, res) => {
  const allergyData = {
    species: '',
    iuisAllergen: '',
    type: 'Food Allergy',
    group: '',
    length: '',
    accession: '',
    gi: '',
    firstVersion: '',
    isGeneralAllergy: true,
  };

  const newAllergy = new Allergies(allergyData);
  newAllergy.save((err) => {
  });

  return res.status(200);

});

module.exports = router;
