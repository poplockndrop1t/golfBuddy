const Bag = require('../db/models/bag.js');

module.exports = {
  get: function(req, res) {
    Bag.find({}, (err, response) => {
      if (response) {
        res.json(response);
      } else {
        res.json(err);
      }
    });
  }
}