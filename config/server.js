'use strict';

var logger = require('koa-logger');
var jwt = require('koa-jwt');
var bodyParser = require('koa-body');

var init = function (app, config) {
    app.use(logger());
    app.use(bodyParser());
    app.use(function(ctx, next) {
        return next().catch((err) => {
            if(401 == err.status) {
                ctx.status = 401;
                ctx.body = {
                    "error": "Not authorized"
                }
            } else {
                throw err;
            }
        });
    });
    app.use(jwt({
        secret: config.app.key
    }).unless({ path: [/^\/api\/login/] }));
};

module.exports = {
    init
}