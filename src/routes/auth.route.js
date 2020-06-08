var express = require('express');
var controllers = require('../controllers/auth.controller')
var router = express.Router();


router.post('/signup', controllers.logUp);
router.post('/signup', controllers.login);

module.exports = router;