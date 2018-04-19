'use strict';

var koa = require('koa'); 
var config = require('./config/config'); 
var routes = require('./config/routes');
var server = require('./config/server');

var app = new koa(); 
server.configure(app, config);
routes.configure(app, config);

app.listen(config.app.port);
console.log(config.app.name + ' server started on URL: http://localhost:' + config.app.port);