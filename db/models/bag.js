const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

mongoose.Promise = global.Promise;

const bagSchema = mongoose.Schema({
  driver: [{
    category: String,
    type: String,
    brand: String,
    flex: String
  }],
  woods: [{
    category: String,
    type: String,
    brand: String,
    flex: String
  }],
  hybrids: [{
    category: String,
    type: String,
    brand: String,
    flex: String
  }],
  irons: [{
    category: String,
    type: String,
    brand: String,
    flex: String
  }],
  wedges: [{
    category: String,
    type: String,
    brand: String,
    flex: String
  }],
  putter: [{
    category: String,
    type: String,
    brand: String,
    flex: String
  }]
});

const Bag = mongoose.model('Bag', bagSchema);

module.exports = Bag;