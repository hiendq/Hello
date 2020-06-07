const express = require('express');

const app = express();
const port = 5000

app.get('/', (req, res) => {
    res.send(`OK`);
})
app.get('/api/hi', (req, res) => {
    res.send(`Say hi`);
})
app.listen(port, function() {
    console.log('Server listening on port ' + port);
  });
