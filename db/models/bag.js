const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

mongoose.Promise = global.Promise;

const bagSchema = mongoose.Schema({
  driver: Array,
  woods: Array,
  hybrids: Array,
  irons: Array,
  wedges: Array,
  putter: Array
});

const Bag = mongoose.model('Bag', bagSchema);

module.exports = Bag;