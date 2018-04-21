'use strict';

var crypto = require('crypto');

var app = {
    name: 'PIWOT',
    port: 8055,
    key: crypto.randomBytes(256).toString('hex')
}

module.exports = {
    app
};