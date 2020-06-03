const Bag = require('../db/models/bag.js');

module.exports = {
  delete: function(req, res) {
    Bag.findOne({ _id: '5ed7d1a5e7445509119e2d7d' }, (err, response) => {
      Bag.deleteOne(response, (e, r) => {
        if (e) console.log(e)
        res.send(r);
      })
    });
  },
  get: function(req, res) {
    Bag.find({}, (err, response) => {
      if (err) return console.error(err);
      console.log('here', response);
      res.send(JSON.stringify(response));
    });
  },
  post: function(req, res) {
    Bag.findOne({ username: req.body.username }, (err, response) => {
      if (err) return console.error(err);
      if (response === null) {
        var newBag = new Bag()
        newBag.username = req.body.username;
        newBag.save((e, data) => {
          if (e) return console.error(e);
          res.json(data);
        });
      }
      if (response) {
        console.log('here', response);
      }
      // else {
        // console.log('test,', response);
        // var currentBag = response;
        // currentBag.driver = req.body.driver;
        // currentBag.woods = req.body.woods;
        // currentBag.hybrids = req.body.hybrids;
        // currentBag.irons = req.body.irons;
        // currentBag.wedges = req.body.wedges;
        // currentBag.putter = req.body.putter;
        // currentBag.save((err, data) => {
        //   if (err) return console.error(err);
        //   res.json(response);
        // });
      // };
    });
  },
  retrieveBag: function(req, res, cb) {
    Bag.findById({ '_id': req.session._id }, (err, response) => {
      if (err) return console.error(err);
      req.session._id = response._id
      return cb(req, res, JSON.stringify(response))
    });
  }
};