const Bag = require('../db/models/bag.js');

module.exports = {
  delete: function(req, res) {
    Bag.findOne({ _id: req.body._id }, (err, response) => {
      Bag.deleteOne(response, (e, r) => {
        if (e) console.log(e)
        res.send(r);
      })
    });
  },
  get: function(req, res) {
    Bag.find({}, (err, response) => {
      if (err) return console.error(err);
      res.send(JSON.stringify(response));
    });
  },
  post: function(req, res) {
    Bag.findOne({ username: req.body.username.username }, (error, response) => {
      if (error) return console.error(error);
      if (response.length > 0) {
        var currentBag = response;
        currentBag.driver = req.body.driver ? req.body.driver : currentBag.driver;
        currentBag.woods = req.body.woods ? req.body.woods : currentBag.woods;
        currentBag.hybrids = req.body.hybrids ? req.body.hybrids : currentBag.hybrids;
        currentBag.irons = req.body.irons ? req.body.irons : currentBag.irons;
        currentBag.wedges = req.body.wedges ? req.body.wedges : currentBag.wedges;
        currentBag.putter = req.body.putter ? req.body.putter : currentBag.putter;
        currentBag.save((err, data) => {
          if (err) return console.error(err);
          res.json(currentBag);
        });
      }
    });
  }
};