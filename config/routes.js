'use strict';

var router = require('koa-router');
var auth = require('../app/auth/auth');
var project = require('../app/project/project');
var team = require('../app/team/team');

module.exports.configure = function (app, config) {

    var _ = new router({
        prefix: '/api'
    });

    _.post('/login', function (ctx, next) {
        auth.authenticate(ctx);
    });

    _.get('/projects', function(ctx, next) {
        project.getProjects(ctx);
    });

    _.get('/projects/:id', function(ctx, next) {
        project.getProject(ctx);
    });

    _.get('/team/:id', function(ctx) {
        team.getMembers(ctx);
    });

    app.use(_.routes());
    app.use(_.allowedMethods());
};