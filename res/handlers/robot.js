const express = require('express');
const Allergies = require('mongoose').model('Allergies');

const router = new express.Router();

const authValidationMiddleware = require('../middleware/auth-validation.js');

const robotInputValidationMiddleware = require(
    '../middleware/robot-input-validation.js');

router.post('/handle-command', authValidationMiddleware,
    robotInputValidationMiddleware, (req, res) => {

      console.log('here');

      let availableCommands = [
        '/allergy-symptoms allergy-name',
        '/allergy-triggers allergy-name',
        '/allergy-diagnosis allergy-name',
        '/allergy-management allergy-name',
        '/allergy-faq allergy-name',
      ];
      let possibleAllergies = [
        'food',
        'skin',
        'dust',
        'insect-sting',
        'pet',
        'eye',
        'drug',
        'rhinitis',
        'latex',
        'mold',
        'sinus',
        'cockroach',
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

          if (possibleAllergies.indexOf(queryParts[1]) !== -1) {

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
                    replace(' ', '-') + '#symptoms',
              });
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

          if (possibleAllergies.indexOf(queryParts[1]) !== -1) {

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
                    replace(' ', '-') + '#triggers',
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

          if (possibleAllergies.indexOf(queryParts[1]) !== -1) {

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
                    replace(' ', '-') + '#diagnosis',
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

          if (possibleAllergies.indexOf(queryParts[1]) !== -1) {

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
                    replace(' ', '-') + '#management',
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

          if (possibleAllergies.indexOf(queryParts[1]) !== -1) {

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
                    replace(' ', '-') + '#faq',
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
