'use strict';

var router = require('koa-router');
var authenticator = require('../app/authentication/authentication')

module.exports.configure = function (app, config) {

    var _ = new router({
        prefix: '/api'
    });

    _.post('/login', function (ctx, next) {
        /* TODO login API*/
        authenticator.authenticate(ctx);
    });

    _.get('/dashboard', function(ctx, next) {
        ctx.body = 'PIWOT dashboard at your service !!!';
        console.log(ctx.state.user);
    });

    app.use(_.routes());
    app.use(_.allowedMethods());
};