const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 1337;

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`|2 U ${port}`);
});