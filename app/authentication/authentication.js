'use strict';

var users = require('../user/user');
var jwt = require('jsonwebtoken');
var config = require('../../config/config');

var authenticate = function(ctx) {
    let loginName = ctx.request.body.loginName;
    let password = ctx.request.body.password;
    let user = users.getUserByLogin(loginName, password);

    ctx.status = 200;
    ctx.body = {
        token: jwt.sign(user, config.app.key),
        message: 'Successfully logged in'
    }
    return ctx;
}

module.exports = {
    authenticate
};

