var mongoose = require('mongoose');
const Schema = require("mongoose").Schema;
var CitySchema = new mongoose.Schema({
    code: Number,
    title: String,
});
var City = mongoose.model("city", CitySchema, 'cities');

module.exports= City;