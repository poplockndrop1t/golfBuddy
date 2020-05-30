const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/index.js');
const router = require('./router.js');

const app = express();
const port = process.env.PORT || 1337;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/build'));

app.use('/api', router);

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/build/index.html');
});

app.listen(port, () => {
  console.log(`|2 U ${port}`);
});