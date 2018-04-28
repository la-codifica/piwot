'use strict';

var users = require('../user/user');
var jwt = require('jsonwebtoken');
var config = require('../../config/config');

var authenticate = function (ctx) {
    let loginName = ctx.request.body.loginName;
    let password = ctx.request.body.password;
    let user = users.getUserByLogin(loginName, password);
    if (user) {
        ctx.status = 200;
        ctx.body = {
            token: jwt.sign(user, config.app.key),
            message: 'Successfully logged in'
        }
    } else {
        ctx.status = 500;
        ctx.body = {
            message: "Failed to authenticate user"
        }
    }
    return ctx;
}

module.exports = {
    authenticate
};

