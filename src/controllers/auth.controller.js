var User = require('../models/user.model')
const shortid = require('shortid');

module.exports.logUp = function(req, res) {
    req.body.id = shortid.generate()
    console.log(req.body)
    User.create(req.body)
        .then(res.status(201).json({message: 'Done'}))
}
module.exports.login = function(req, res) {
    const { email, password} = req.body;
    return res.status(201).json('Func login');
}
module.exports.login = function(req, res) {
    res.status(201).json({message: 'Login here'})       
}
module.exports.getInfoById = function (req, res) {
    const id = req.params.id;
    res.status(201).json({message: 'Get account Info'})
}
module.exports.changeInfoById = function (req, res) {
    const id=  req.params.id;
    let userInfo = res.body;
    user.id = id;
    res.status(201).json({message: 'Get account Info'})
}
