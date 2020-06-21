const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

mongoose.Promise = global.Promise;

const statsSchema = mongoose({
  username: String,
  fir: Number,
  gir: Number,
  putts: Number
  pars: Number,
  birdies: Number,
  eagles: Number
  bogies: Number
});

const Stats = mongoose.model('Stats', statsSchema);