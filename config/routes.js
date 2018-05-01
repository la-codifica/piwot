'use strict';

var router = require('koa-router');
var auth = require('../app/auth/auth');
var project = require('../app/project/project');
var team = require('../app/team/team');
var pi = require('../app/pi/pi');
var cp_item = require('../app/cp_item/cp_item');
var sprint = require('../app/sprint/sprint');
var sp_item = require('../app/sp_item/sp_item');

module.exports.configure = function (app, config) {

    var _ = new router({
        prefix: '/api'
    });

    _.post('/login', (ctx, next) => auth.authenticate(ctx));

    _.get('/projects', (ctx, next) => project.getAll(ctx));

    _.get('/project/:id', (ctx, next) => project.get(ctx));

    _.get('/team/:id', (ctx, next) => team.getMembers(ctx));

    _.get('/project/:id/pis', (ctx, next) => pi.getAll(ctx));

    _.post('/project/:id/pi', (ctx, next) => pi.create(ctx));

    _.get('/project/:id/pi/:id', (ctx, next) => pi.get(ctx));

    _.put('/project/:id/pi/:id', (ctx, next) => pi.update(ctx));

    _.get('/project/:id/pi/:id/cp_items', (ctx, next) => cp_item.getAll(ctx));

    _.put('/project/:id/pi/:id/cp_item/:id', (ctx, next) => cp_item.update(ctx));

    _.put('/project/:id/pi/:id/sprint/:id/expEstimates', (ctx, next) => sprint.updateExpectedEstimates(ctx));

    _.get('/project/:id/pi/:id/sp_items', (ctx, next) => sp_item.getAll(ctx));

    _.post('/project/:id/pi/:id/sp_item', (ctx, next) => sp_item.create(ctx));

    _.put('/project/:id/pi/:id/sp_item/:id', (ctx, next) => sp_item.update(ctx));

    _.delete('/project/:id/pi/:id/sp_item/:id', (ctx, next) => sp_item.del(ctx));

    _.get('/project/:id/pi/:id/sp_item/:id', (ctx, next) => sp_item.get(ctx));

    app.use(_.routes());
    app.use(_.allowedMethods());
};