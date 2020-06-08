var express = require('express');
var controllers = require('../controllers/auth.controller')
var router = express.Router();


router.post('/signup', controllers.logUp);
router.post('/login', controllers.login);
router.get('/change_info/:id', controllers.getInfoById);
router.post('/change_info/:id', controllers.changeInfoById);
module.exports = router;