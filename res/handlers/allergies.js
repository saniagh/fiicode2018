const Allergies = require('mongoose').model('Allergies');
const Group = require('mongoose').model('Group');
const User = require('mongoose').model('User');
const CronJobModel = require('mongoose').model('CronJobModel');
const express = require('express');
const uuid = require('uuid');
const nodemailer = require('nodemailer');
const CronJob = require('cron').CronJob;

const router = new express.Router();

const createGroupFormValidation = require(
    '../middleware/group-form-validation.js',
);
const groupInviteFormValidation = require(
    '../middleware/group-invite-form-validation.js',
);

const authValidationMiddleware = require('../middleware/auth-validation.js');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'valentinfiicode2018@gmail.com',
    pass: 'ACCOUNT_PASSWORD',
  },
});

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

router.post('/save-group', createGroupFormValidation, authValidationMiddleware,
    (req, res) => {
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

      const passCode = uuid.v4();

      const groupData = {
        userId: req.body.userId,
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
        passCode: passCode,
      };

      const newGroup = new Group(groupData);
      newGroup.save((err) => {
        if (err) {
          return res.status(400).json({
            message: 'Internal error',
          });
        }

        const allergiesOptedFor = JSON.parse(req.body.allergiesOptedFor);

        User.find({ _id: req.body.userId }, (err, user) => {
          if (err) {
            return res.status(400).json({
              message: 'Internal error',
            });
          }

          if (user.length === 0) {
            return res.status(404).json({
              message: 'Group not found',
            });
          }

          let newParticiapntInGroups = user[0].participantInGroups;

          Group.find({ passCode: passCode }, (err, group) => {
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

            allergiesOptedFor.map((allergy) => {
              const jobData = {
                jobTime: allergy.alertTime,
                jobParticipants: JSON.parse(req.body.participants),
                jobTitle: req.body.groupName,
                jobAllergyName: allergy.type,
                jobMotto: req.body.groupMotto,
                jobDescription: req.body.groupMessage,
                jobLink: `localhost/groups/verified/${group[0]._id}&${passCode}`,
              };

              const newCronJobModel = new CronJobModel(jobData);
              newCronJobModel.save((err) => {
                if (err) {
                  return res.status(400).json({
                    message: 'Internal error',
                  });
                }

                let job = new CronJob(new Date(allergy.alertTime), () => {
                      const mailOptions = {
                        from: 'valentinfiicode2018@gmail.com',
                        to: req.body.ownerEmailAddress,
                        subject: `Allergy Storm Alert From - ${req.body.groupName} ${req.body.groupMotto ?
                            req.body.groupMotto :
                            ''}`,
                        html: `<div style="font-family: Roboto, sans-serif;">${req.body.ownerFullName ?
                            `<h1>Mr/Mrs ${req.body.ownerFullName},</h1>` :
                            `<h1>Attention ${req.body.ownerEmailAddress},</h1>`}<p>You have chosen to be mailed now about the following allergy: <i>${allergy.type}</i></p>${req.body.groupMessage ?
                            `<p>This is the message you wanted to be reminded of: <i>${req.body.groupMessage}</i></p>` :
                            ''}${req.body.shareLinkExists && !expireTime ?
                            `<p>If you wish to invite your friends to this group, feel free to do so by using the following link: <i><a href=${shareLink}>${shareLink}</a></i></p>` :
                            ''}<p>Find more info here: <i><a href=${`localhost/groups/verified/${group[0]._id}&${passCode}`}>Group's page</a></i></p><div style="display: flex; margin-top: 10px;"><a href="/localhost"><img style="width: 200px; height: 128px;" src="http://i.imgur.com/Ua80D2q.png" alt="Allergy Storm"></a></div></div>`,
                      };
                      transporter.sendMail(mailOptions, function (err, info) {
                        if (err)
                          console.log(err);
                        else {
                          console.log(info);

                          CronJobModel.deleteMany({
                            $and: [
                              { jobAllergyName: { $eq: allergy.type } },
                              { jobLink: { $eq: `localhost/groups/verified/${group[0]._id}&${passCode}` } },
                            ],
                          }, () => {
                          });
                        }
                      });
                    }, () => {
                    },
                    false);
                job.start();
              });
            });

            newParticiapntInGroups.push(group[0]._id);

            User.updateOne({ _id: { $eq: req.body.userId } }, {
              $set: {
                participantInGroups: newParticiapntInGroups,
              },
            }, (err) => {
              if (err) {
                return res.status(400).json({
                  message: 'An error has occurred.',
                });
              }
            });

            return res.json({
              groupId: group[0]._id,
              groupPassCode: passCode,
            });
          });
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

// delete this
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

router.post('/check-share-link-validity', (req, res) => {
  Group.find({ shareLink: req.body.shareLink }, (err, group) => {
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

    console.log(group[0].participants);

    if (group[0].shareLinkExpiresAt) {
      let currentTime = Date.now();

      if (currentTime > group[0].shareLinkExpiresAt)
        return res.status(401).json({
          message: 'Invitation link has expired!',
        });
    }

    return res.json({
      message: 'Link is valid',
      participants: group[0].participants,
    });
  });
});

router.post('/on-enter-group', groupInviteFormValidation, (req, res) => {
  if (!req.body.success)
    return res.status(400).json({
      message: req.body.message,
      success: false,
    });

  let newParticipants = JSON.parse(req.body.participants);

  newParticipants.push({
    participantEmailAddress: req.body.emailAddress,
    participantFullName: req.body.fullName,
    participantRole: 'Participant',
  });

  User.find({ email: req.body.emailAddress }, (err, user) => {
    if (err) {
      return res.status(400).json({
        message: 'Internal error',
      });
    }

    let newParticiapntInGroups = [];

    if (user.length !== 0) {
      newParticiapntInGroups = user[0].participantInGroups;
    }

    Group.find({ shareLink: req.body.shareLink }, (err, group) => {
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

      if (req.body.isLoggedIn) {
        newParticiapntInGroups.push(group[0]._id);

        User.updateOne({ email: { $eq: req.body.emailAddress } }, {
          $set: {
            participantInGroups: newParticiapntInGroups,
          },
        }, (err) => {
          if (err) {
            return res.status(400).json({
              message: 'An error has occurred.',
            });
          }

          Group.updateOne({ shareLink: { $eq: req.body.shareLink } }, {
                $set: {
                  participants: newParticipants,
                },
              }, (err) => {
                if (err) {
                  return res.status(400).json({
                    message: 'An error has occurred.',
                  });
                } else {
                  Group.find({ shareLink: req.body.shareLink }, (err, group) => {
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

                    CronJobModel.updateOne({
                      $and: [
                        { jobTitle: { $eq: group[0].groupName } },
                        { jobLink: { $eq: `localhost/groups/verified/${group[0]._id}&${group[0].passCode}` } },
                      ],
                    }, {
                      $set: {
                        jobParticipants: newParticipants,
                      },
                    }, (err) => {
                      if (err) {
                        return res.status(400).json({
                          message: 'An error has occurred.',
                        });
                      }

                      group[0].allergiesOptedFor.map((allergy) => {
                        let job = new CronJob(new Date(allergy.alertTime), () => {
                              const mailOptions = {
                                from: 'valentinfiicode2018@gmail.com',
                                to: req.body.emailAddress,
                                subject: `Allergy Storm Alert From - ${group[0].groupName} ${group[0].groupMotto ?
                                    group[0].groupMotto :
                                    null}`,
                                html: `<div style="font-family: Roboto, sans-serif;">${req.body.fullName ?
                                    `<h1>Mr/Mrs ${req.body.fullName},</h1>` :
                                    `<h1>${req.body.emailAddress},</h1>`}<p>You have chosen to be mailed now about the following allergy: <i>${allergy.type}</i></p>${group[0].groupMessage ?
                                    `<p>This is the message you wanted to be reminded of: <i>${group[0].groupMessage}</i></p>` :
                                    null}<p>Find more info here: <i><a href=${`localhost/groups/verified/${group[0]._id}&${group[0].passCode}`}>Group's page</a></i></p></div>`,
                              };
                              transporter.sendMail(mailOptions, function (err, info) {
                                if (err)
                                  console.log(err);
                                else {
                                  console.log(info);

                                  CronJobModel.deleteMany({
                                    $and: [
                                      { jobAllergyName: { $eq: allergy.type } },
                                      { jobLink: { $eq: `localhost/groups/verified/${group[0]._id}&${group[0].passCode}` } },
                                    ],
                                  }, () => {
                                  });
                                }
                              });
                            }, () => {
                            },
                            false);
                        job.start();
                      });

                      return res.json({
                        groupId: group[0]._id,
                        groupPassCode: group[0].passCode,
                      });
                    });
                  })
                  ;
                }
              },
          );
        });
      } else {
        Group.updateOne({ shareLink: { $eq: req.body.shareLink } }, {
          $set: {
            participants: newParticipants,
          },
        }, (err) => {
          if (err) {
            return res.status(400).json({
              message: 'An error has occurred.',
            });
          }

          Group.find({ shareLink: req.body.shareLink }, (err, group) => {
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

            CronJobModel.updateOne({
              $and: [
                { jobTitle: { $eq: group[0].groupName } },
                { jobLink: { $eq: `localhost/groups/verified/${group[0]._id}&${group[0].passCode}` } },
              ],
            }, {
              $set: {
                jobParticipants: newParticipants,
              },
            }, (err) => {
              if (err) {
                console.log(err);
                return res.status(400).json({
                  message: 'An error has occurred.',
                });
              }

              group[0].allergiesOptedFor.map((allergy) => {
                let job = new CronJob(new Date(allergy.alertTime), () => {
                      const mailOptions = {
                        from: 'valentinfiicode2018@gmail.com',
                        to: req.body.emailAddress,
                        subject: `Allergy Storm Alert From - ${group[0].groupName} ${group[0].groupMotto ?
                            group[0].groupMotto :
                            ''}`,
                        html: `<div style="font-family: Roboto, sans-serif;">${req.body.fullName ?
                            `<h1>Mr/Mrs ${req.body.fullName},</h1>` :
                            `<h1>Attention ${req.body.emailAddress},</h1>`}<p>You have chosen to be mailed now about the following allergy: <i>${allergy.type}</i></p>${group[0].groupMessage ?
                            `<p>This is the message you wanted to be reminded of: <i>${group[0].groupMessage}</i></p>` :
                            ''}<p>Find more info here: <i><a href=${`localhost/groups/verified/${group[0]._id}&${group[0].passCode}`}>Group's page</a></i></p></div>`,
                      };
                      transporter.sendMail(mailOptions, function (err, info) {
                        if (err)
                          console.log(err);
                        else {
                          console.log(info);

                          CronJobModel.deleteMany({
                            $and: [
                              { jobAllergyName: { $eq: allergy.type } },
                              { jobLink: { $eq: `localhost/groups/verified/${group[0]._id}&${group[0].passCode}` } },
                            ],
                          }, () => {
                          });
                        }
                      });
                    }, () => {
                    },
                    false);
                job.start();
              });

              return res.json({
                groupId: group[0]._id,
                groupPassCode: group[0].passCode,
              });
            });
          });

        });
      }
    });
  });
});

router.post('/request-share-link', authValidationMiddleware, (req, res) => {

  Group.updateOne({ _id: { $eq: req.body.groupId } }, {
    $set: {
      shareLink: 'localhost/group-invite/' + uuid.v4(),
      shareLinkExpiresAt: Date.now() + 86400000,
    },
  }, (err) => {
    if (err) {
      return res.status(400).json({
        message: 'An error has occurred.',
      });
    }

    Group.find({ _id: req.body.groupId }, (err, group) => {
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
});

router.post('/get-my-groups', authValidationMiddleware, (req, res) => {
  Group.find({ ownerEmailAddress: req.body.email }, (err, groups) => {
    if (err) {
      return res.status(400).json({
        message: 'Internal error',
      });
    }

    let ownGroups = groups;

    Group.find(
        {
          $and: [
            { participants: { $elemMatch: { participantEmailAddress: req.body.email } } },
            { ownerEmailAddress: { $not: { $eq: req.body.email } } },
          ],
        },
        (err, groups) => {
          if (err) {
            return res.status(400).json({
              message: 'An error has occurred.',
            });
          }

          if (groups.length === 0) {
            return res.status(404).json({
              message: 'Group not found',
            });
          }

          return res.json({
            participantGroups: groups,
            ownGroups: ownGroups,
          });
        });

  });
});

module.exports = router;
