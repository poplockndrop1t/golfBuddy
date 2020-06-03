const router = require('express').Router();
const bagController = require('./controllers/bagController.js');

router.get('/bag', bagController.get);
router.post('/bag', bagController.post);
router.delete('/bag', bagController.delete);

module.exports = router;