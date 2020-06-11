var mongoose = require('mongoose');
const Schema = require("mongoose").Schema;
var DistrictSchema = new mongoose.Schema({
    code: Number,
    city: Number,
    title: String,
});
var District = mongoose.model("district", DistrictSchema, 'districts');

module.exports= District;