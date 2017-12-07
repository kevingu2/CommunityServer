/**
 * Created by kevingu on 4/2/16.
 */
var request = require('supertest');
var appRoot = require('app-root-path');
var app = require(appRoot + '/app.js');

describe('GET /', function() {
    'use strict';
    it('should return 200 OK', function(done) {
        request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
