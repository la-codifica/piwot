'use strict';

var router = require('koa-router');
var authenticator = require('../app/authentication/authentication');
var projectService = require('../app/services/projectService');

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

    _.get('/projects', function(ctx, next) {
        ctx.body = projectService.getProjects();
        ctx.status = 200;
    });

    _.get('/projects/:id', function(ctx, next) {
        ctx.body = projectService.getProject(ctx.params.id);
        ctx.status = 200;
    });

    app.use(_.routes());
    app.use(_.allowedMethods());
};