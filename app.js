'use strict';

var express = require('express');
var config  = require('config');
var routes  = require('./routes');

var app = express();

app.set('env',  config.get('nodeEnv'));
app.set('port', config.get('port'));

app.use(routes);
app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

module.exports = app;
