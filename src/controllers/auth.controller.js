const shortid = require('shortid');

var User = require('../models/user.model')
const _userService = require('../services/auth.services') 

module.exports.logUp = function(req, res) {
    req.body.id = shortid.generate()
    console.log(req.body)
    User.create(req.body)
        .then(res.status(201).json({message: 'Done'}))
       
}
module.exports.login = function(req, res) {
    res.status(201).json({message: 'Login here'})       
}
module.exports.getInfoById = async function (req, res) {
    const id = req.params.id;
    let user = await _userService.findUserByID(id)
    if(user!==null) res.status(201).json({user})
    else res.status(201).json({message: 'Not found user'})
} 
module.exports.changeInfoById = function (req, res) {
    const id=  req.params.id;
    let userInfo = res.body;
    user.id = id;
    res.status(201).json({message: 'Get account Info'})
}
module.exports.removeUserById = async function (req, res) {
    const id = req.params.id;
    await _userService.removeUserById(id)
    return res.status(201).json({message: 'Has deleted'})

} 
