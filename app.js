var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('200');
});

app.get('/events', function(req, res) {
  res.send('200');
});



module.exports = app;
