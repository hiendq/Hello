require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
var passport = require('passport');
var mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());

app.get('/', (req, res) => {
    res.send(`OK`);
})
