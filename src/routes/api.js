var express = require('express');
var apiPlatform = require('./api/platform');
var apiTime = require('./api/time');

var app = express();

app.use('/platform', apiPlatform);
app.use('/time', apiTime);

module.exports = app;
