const Stats = require('../db/models/stats.js');

module.exports = {
  getStats: function(req, res) {
    Stats.find({}, (err, response) => {
      if (err) return console.error(err);
      res.json(response);
    });
  }
};