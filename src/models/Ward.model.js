var mongoose = require('mongoose');
const Schema = require("mongoose").Schema;
var WardSchema = new mongoose.Schema({
    code: Number,
    district: Number,
    city: Number,
    title: String,
});
var Ward = mongoose.model("ward", WardSchema, 'wards');

module.exports= Ward;