var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('ok');
  console.log('ok');
});

app.listen(3000);
