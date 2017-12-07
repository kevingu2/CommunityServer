var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.json({
        status: 200,
        message: 'Hello World'
    });
});

module.exports = router;
