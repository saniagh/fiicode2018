const express = require('express');
const Allergies = require('mongoose').model('Allergies');

const RateLimit = require('express-rate-limit');

const router = new express.Router();

const robotInputValidationMiddleware = require(
    '../middleware/robot-input-validation.js');

const authValidationMiddleware = require('../middleware/auth-validation.js');

let createGroupLimiter = new RateLimit({
  windowMs: 10 * 60 * 1000, // max 50 requests per 10 mins
  delayAfter: 3,
  delayMs: 3 * 1000,
  max: 50,
  message: 'Too many requests.',
});

router.post('/handle-command', authValidationMiddleware,
    createGroupLimiter,
    robotInputValidationMiddleware, (req, res) => {

      let availableCommands = [
        '/allergy-symptoms allergy-name',
        '/allergy-triggers allergy-name',
        '/allergy-diagnosis allergy-name',
        '/allergy-management allergy-name',
        '/allergy-faq allergy-name',
      ];
      let possibleAllergies = [
        'food ( ALL )',
        'skin ( /allergy-symptoms, /allergy-faq ) ',
        'dust ( /allergy-triggers, /allergy-management, /allergy-faq )',
        'sting ( /allergy-symptoms, /allergy-diagnosis, /allergy-management, /allergy-faq )',
        'pet ( /allergy-symptoms, /allergy-diagnosis, /allergy-management,  )',
        'eye ( /allergy-symptoms, /allergy-diagnosis, /allergy-management  )',
        'drug ( /allergy-symptoms, /allergy-diagnosis, /allergy-management, /allergy-faq )',
        'rhinitis ( /allergy-symptoms, /allergy-diagnosis, /allergy-management, /allergy-faq )',
        'latex ( /allergy-symptoms, /allergy-triggers, /allergy-management )',
        'mold ( /allergy-symptoms, /allergy-management )',
        'sinus ( /allergy-symptoms, /allergy-management, /allergy-faq )',
        'cockroach ( /allergy-symptoms, /allergy-management )',
      ];

      if (req.body.command === '/help') {
        return res.json({
          availableCommands: availableCommands,
          possibleAllergies: possibleAllergies,
        });
      }

      if (req.body.command.indexOf('/allergy-symptoms') !== -1) {
        let queryParts = req.body.command.split(' ');

        if (queryParts.length > 2) {
          return res.status(400).json({
            message: 'Use only the specified commands',
          });
        }

        if (queryParts[0] === '/allergy-symptoms') {

          if (queryParts.indexOf(queryParts[1]) !== -1) {

            Allergies.find({
              type: {
                $regex: '.*' + queryParts[1] + '.*',
                $options: 'i',
              },
              isGeneralAllergy: true,
            }, (err, allergies) => {
              if (err) {
                return res.status(400).json({
                  message: 'An error has occurred.',
                });
              }
              if (allergies.length === 0) {
                return res.status(404).json({
                  message: 'Incorrect allergy',
                });
              } else {
                return res.json({
                  allergyLinkAnchor: allergies[0].type.toLowerCase().
                      replace(/ /g, '-') + '#symptoms',
                });
              }
            });

          } else return res.status(400).json({
            message: 'Incorrect allergy',
          });

        } else return res.status(400).json({
          message: 'Incorrect command.',
        });
      } else if (req.body.command.indexOf('/allergy-triggers') !== -1) {
        let queryParts = req.body.command.split(' ');

        if (queryParts.length > 2) {
          return res.status(400).json({
            message: 'Use only the specified commands',
          });
        }

        if (queryParts[0] === '/allergy-triggers') {

          if (queryParts.indexOf(queryParts[1]) !== -1) {

            Allergies.find({
              type: {
                $regex: '.*' + queryParts[1] + '.*',
                $options: 'i',
              },
              isGeneralAllergy: true,
            }, (err, allergies) => {
              if (err) {
                return res.status(400).json({
                  message: 'An error has occurred.',
                });
              }
              if (allergies.length === 0) {
                return res.status(404).json({
                  message: 'Incorrect allergy',
                });
              } else return res.json({
                allergyLinkAnchor: allergies[0].type.toLowerCase().
                    replace(/ /g, '-') + '#triggers',
              });
            });

          } else return res.status(400).json({
            message: 'Incorrect allergy',
          });

        } else return res.status(400).json({
          message: 'Incorrect command.',
        });
      } else if (req.body.command.indexOf('/allergy-diagnosis') !== -1) {
        let queryParts = req.body.command.split(' ');

        if (queryParts.length > 2) {
          return res.status(400).json({
            message: 'Use only the specified commands',
          });
        }

        if (queryParts[0] === '/allergy-diagnosis') {

          if (queryParts.indexOf(queryParts[1]) !== -1) {

            Allergies.find({
              type: {
                $regex: '.*' + queryParts[1] + '.*',
                $options: 'i',
              },
              isGeneralAllergy: true,
            }, (err, allergies) => {
              if (err) {
                return res.status(400).json({
                  message: 'An error has occurred.',
                });
              }
              if (allergies.length === 0) {
                return res.status(404).json({
                  message: 'Incorrect allergy',
                });
              } else return res.json({
                allergyLinkAnchor: allergies[0].type.toLowerCase().
                    replace(/ /g, '-') + '#diagnosis',
              });
            });

          } else return res.status(400).json({
            message: 'Incorrect allergy',
          });

        } else return res.status(400).json({
          message: 'Incorrect command.',
        });
      } else if (req.body.command.indexOf('/allergy-management') !== -1) {
        let queryParts = req.body.command.split(' ');

        if (queryParts.length > 2) {
          return res.status(400).json({
            message: 'Use only the specified commands',
          });
        }

        if (queryParts[0] === '/allergy-management') {

          if (queryParts.indexOf(queryParts[1]) !== -1) {

            Allergies.find({
              type: {
                $regex: '.*' + queryParts[1] + '.*',
                $options: 'i',
              },
              isGeneralAllergy: true,
            }, (err, allergies) => {
              if (err) {
                return res.status(400).json({
                  message: 'An error has occurred.',
                });
              }
              if (allergies.length === 0) {
                return res.status(404).json({
                  message: 'Incorrect allergy',
                });
              } else return res.json({
                allergyLinkAnchor: allergies[0].type.toLowerCase().
                    replace(/ /g, '-') + '#management',
              });
            });

          } else return res.status(400).json({
            message: 'Incorrect allergy',
          });

        } else return res.status(400).json({
          message: 'Incorrect command.',
        });
      } else if (req.body.command.indexOf('/allergy-faq') !== -1) {
        let queryParts = req.body.command.split(' ');

        if (queryParts.length > 2) {
          return res.status(400).json({
            message: 'Use only the specified commands',
          });
        }

        if (queryParts[0] === '/allergy-faq') {

          if (queryParts.indexOf(queryParts[1]) !== -1) {

            Allergies.find({
              type: {
                $regex: '.*' + queryParts[1] + '.*',
                $options: 'i',
              },
              isGeneralAllergy: true,
            }, (err, allergies) => {
              if (err) {
                return res.status(400).json({
                  message: 'An error has occurred.',
                });
              }
              if (allergies.length === 0) {
                return res.status(404).json({
                  message: 'Incorrect allergy',
                });
              } else return res.json({
                allergyLinkAnchor: allergies[0].type.toLowerCase().
                    replace(/ /g, '-') + '#faq',
              });
            });

          } else return res.status(400).json({
            message: 'Incorrect allergy',
          });

        } else return res.status(400).json({
          message: 'Incorrect command.',
        });
      } else return res.status(400).json({
        message: 'Incorrect command.',
      });

    });

module.exports = router;
