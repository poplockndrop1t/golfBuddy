const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongodb_uri = 'mongodb://localhost:27017/golfbuddy';


mongoose.connect(mongodb_uri, { useNewUrlParser: true, useUnifiedTopology: true });


const db = mongoose.connection;

db.once('open', () => {
  console.log('connected to db');
});

module.exports = db;