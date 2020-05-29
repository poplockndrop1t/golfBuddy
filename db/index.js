const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongodb_uri = 'mongodb://localhost:27017/golfbuddy';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.connect(mongodb_uri, options);

const db = mongoose.connection;

db.once('open', () => console.log('connected to db'));

module.exports = db;