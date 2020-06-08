var express = require('express');
var controllers = require('../controllers/auth.controller')
var router = express.Router();


router.post('/signup', controllers.logUp);
router.post('/login', controllers.login);
router.get('/get_info/:id', controllers.getInfoById);
router.post('/change_info/:id', controllers.changeInfoById);
router.delete('/remove_user/:id', controllers.removeUserById);
module.exports = router;