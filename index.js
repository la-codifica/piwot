'use strict';

var koa = require('koa');
var config = require('./config/config');
var server = require('./config/server');
var routes = require('./config/routes');

var app = new koa();
server.init(app, config);
routes.configure(app, config);

app.listen(config.app.port);
console.log(config.app.name + ' server started on ' + config.app.port);