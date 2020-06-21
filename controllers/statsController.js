const Stats = require('../db/models/stats.js');

module.exports = {
  getStats: function(req, res) {
    Stats.find({ username: req.body.username }, (err, response) => {
      if (err) return console.error(err);
      return res.json(response);
    });
  }
};