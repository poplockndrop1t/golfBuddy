const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

mongoose.Promise = global.Promise;

const statsSchema = mongoose.Schema({
  username: String,
  scores: [{
    fir: Number,
    firAttempts: Number,
    gir: Number,
    girAttempts: Number,
    upAndDown30Yard: Number,
    upAndDown30YardAttempts: Number,
    wedgeAppInside100: Number,
    wedgeAppInside100Attempts: Number,
    puttsMadeWithin12Ft: Number,
    puttsMadeWithin12FtAttempts: Number,
    score: Number,
    par: Number
  }]
});

const Stats = mongoose.model('Stats', statsSchema);

module.exports = Stats;