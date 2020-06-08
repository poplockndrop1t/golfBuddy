const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

mongoose.Promise = global.Promise;

const bagSchema = mongoose.Schema({
  username: String,
  password: String,
  driver: [{
    category: String,
    clubType: String,
    brand: String,
    flex: String
  }],
  woods: [{
    category: String,
    clubType: String,
    brand: String,
    flex: String
  }],
  hybrids: [{
    category: String,
    clubType: String,
    brand: String,
    flex: String
  }],
  irons: [{
    category: String,
    clubType: String,
    brand: String,
    flex: String
  }],
  wedges: [{
    category: String,
    clubType: String,
    brand: String,
    flex: String
  }],
  putter: [{
    category: String,
    clubType: String,
    brand: String,
    flex: String
  }]
});

const Bag = mongoose.model('Bag', bagSchema);

module.exports = Bag;