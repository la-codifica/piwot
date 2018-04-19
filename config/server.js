'use strict';

var logger = require('koa-logger');

module.exports.configure = function(app, config) {
    app.use(logger());
};