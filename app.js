require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser')

var authRoutes = require('./src/routes/auth.route');

var passport = require('passport');

const app = express();
const port = process.env.PORT || 5000;

var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => console.log('DB Connected!'))
    .catch(err => {console.log('DB Connection Error: '+err.message);});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send(`OK`);
})
app.listen(port, function() {
    console.log('Server listening on port ' + port);
  });