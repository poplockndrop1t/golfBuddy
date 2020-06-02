const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const db = require('./db/index.js');
const router = require('./router.js');
const bagController = require('./controllers/bagController.js');

const app = express();
const port = process.env.PORT || 1337;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/build'));

app.use(session({
  secret: 'golfbuddy',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 60000,
    secure: false
  }
}));

app.set('trust proxy', 1)

app.use('/api', router);

app.get('/', function(req, res, next) {
  bagController.retrieveBag(req, res, (request, response, dbResponse) => {
    console.log(dbResponse);
  });
});

// app.get('*', (req, res) => {
//   res.sendFile(__dirname + '/build/index.html');
// });

app.listen(port, () => {
  console.log(`|2 U ${port}`);
});