const Stats = require('../db/models/stats.js');

module.exports = {
  getStats: function(username, cb) {
    Stats.find({ username: username }, (err, response) => {
      if (err) return console.error(err);
      return cb(response);
    });
  }
};