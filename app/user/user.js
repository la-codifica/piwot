'use strict';

var getUserByLogin = function(loginName, password) {
    return { 
        loginName: 'admin',
        role: 'admin'
    };
}

module.exports = {
    getUserByLogin
};