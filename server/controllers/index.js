var express = require('express');
var router = express.Router();

/**
 * @api {get} /api/index Request api
 * @apiName getAPI
 * @apiGroup Index
 *
 *
 * @apiSuccess {String} message Hello World
 */
router.get('/index', function(req, res) {
    'use strict';
    res.json({
        status: 200,
        message: 'Hello World'
    });
});

module.exports = router;
