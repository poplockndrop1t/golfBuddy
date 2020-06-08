const bcrypt = require('bcrypt');
const Bag = require('../db/models/bag.js');
const saltRounds = require('../secret/secret.js');

module.exports = {
  createUser: function(req, res) {
    Bag.find({ username: req.body.username }, (err, response) => {
      if (err) return console.error(err);
      res.send(JSON.stringify(`USER EXISTS`));
    });
  },
  login: function(req, res) {

  }
};