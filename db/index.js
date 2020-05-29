const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/golfbuddy', { useNewUrlParser: true, useUnifiedTopology: true });

const Bag = mongoose.model('Bag', {
  Driver: String
});

const bag = new Bag({ Driver: 'Taylormade' });

const db = mongoose.connection;

db.once('open', () => {
  console.log('connected to db');
});

module.exports = db;