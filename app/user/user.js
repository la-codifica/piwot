'use strict';

const users = [
    {
        loginName: "admin",
        password: "admin"
    }
];

var getUserByLogin = function (loginName, password) {
    let user = users.find((user) => user.loginName === loginName && user.password === password);
    if(user)
        return user;
}

module.exports = {
    getUserByLogin
};