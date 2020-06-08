var User = require('../models/user.model')
const shortid = require('shortid');

module.exports.logUp = function(req, res) {
    req.body.id = shortid.generate()
    console.log(req.body)
    User.create(req.body)
        .then(res.status(201).json({message: 'Done'}))
       
}
