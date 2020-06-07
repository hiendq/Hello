const express = require('express');

const app = express();
const POST =  5000;

app.get('/', (req, res) => {
    res.send(`OK`);
})
app.listen(POST, function() {
    console.log('Server listening on port ' + POST);
  });