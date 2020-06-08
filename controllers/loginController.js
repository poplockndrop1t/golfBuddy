const bcrypt = require('bcrypt');
const Bag = require('../db/models/bag.js');
const saltRounds = require('../secret/secret.js');

module.exports = {
  createUser: function(req, res) {
    Bag.find({ username: req.body.username }, (err, response) => {
      if (err) return console.error(err);
      if (response.length > 0) return res.send(JSON.stringify(`USER EXISTS`));
      bcrypt.genSalt(saltRounds.saltRounds, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
          var newBag = new Bag();
          newBag.username = req.body.username;
          newBag.password = hash;
          console.log(newBag);
          // newBag.save((err, data) => {
          //   if (err) return console.error(err);
          //   res.json(data);
          // });
        });
      });
    });
  },
  login: function(req, res) {

  }
};