const router = require('express').Router();
const bagController = require('./controllers/bagController.js');
const loginController = require('./controllers/loginController.js');

// Bag Routes
router.get('/bag', bagController.get);
router.post('/bag', bagController.post);
router.delete('/bag', bagController.delete);

// Login Routes
router.post('/createUser', loginController.createUser);
router.post('/login', loginController.login);

module.exports = router;