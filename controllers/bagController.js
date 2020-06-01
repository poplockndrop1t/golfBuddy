const Bag = require('../db/models/bag.js');

module.exports = {
  get: function(req, res) {
    Bag.findOne({}, (err, response) => {
      if (err) return console.error(err);
      res.send(JSON.stringify(response));
    });
  },
  post: function(req, res) {
    Bag.findOne({}, (err, response) => {
      if (err) return console.error(err);
      if (response) {
        if (response.length === 0) {
          var newBag = new Bag(req.body);
          newBag.save((err, data) => {
            if (err) return console.error(err);
            res.json(response);
          });
        } else {
          var currentBag = response;
          currentBag.driver = req.body.driver;
          currentBag.woods = req.body.woods;
          currentBag.hybrids = req.body.hybrids;
          currentBag.irons = req.body.irons;
          currentBag.wedges = req.body.wedges;
          currentBag.putter = req.body.putter;
          currentBag.save((err, data) => {
            if (err) return console.error(err);
            res.json(response);
          });
        }
      };
    });
  }
};