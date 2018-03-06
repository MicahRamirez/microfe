var express = require('express');
var app = express();
var path = require('path');
var cors = require('cors');

var config = require('./config');

// only in dev let cross origin requests work without restriction
if (config.get('env') === 'development') {
  app.use(cors());
}

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/ping', (req, res) => {
  res.status(200).send('pong');
});

app.get('/*', (req, res) => {
  res.sendFile(config.get('staticContent'));
});

app.listen(3000);