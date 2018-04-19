'use strict';

var route = require('koa-route');

module.exports.configure = function(app, config) {
    app.use(route.get('/', function(ctx, next) {
        ctx.body = "<h1>!!!*** PIWOT work has started with Live watch enabled ***!!!</h1>";
    }));
};