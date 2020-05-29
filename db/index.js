const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/golfbuddy', { useNewUrlParser: true, useUnifiedTopology: true });

const Bag = mongoose.model('Bag', {
  Driver: String
});

const bag = new Bag({ name: 'Taylormade' });
bag.save().then(() => console.log('save'));