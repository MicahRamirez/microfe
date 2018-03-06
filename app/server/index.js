var express = require('express');
var app = express();
var config = require('./config');

app.get('*', function(req, res){
  res.send(config.get('env'));
});

app.listen(3000);