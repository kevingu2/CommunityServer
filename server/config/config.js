/**
 * Config var for app
 **/
require('dotenv').config({path: '.env.' + process.env.NODE_ENV});

module.exports = {
    port: process.env.PORT || 3000,
    secret: process.env.SECRET || 'mysecret'
};