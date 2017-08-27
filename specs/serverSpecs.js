var request = require('supertest');
var testEvent = require('./testEvent')
var server = require('../server/server');

describe('Server Accessing API', function () {
  it('Returns 200 status code', function (done) {
    request(server)
    .checkApi(true, true)
    .expect(res.statusCode == '200', done);
  });

  it('Response returns ok', function (done) {
    request(server)
    .checkApi()
    .expect('OK', done);
  });

    it('Returns JSON format', function (done) {
      request(server)
      .checkApi()
    .expect('Content-Type', /json/, done);
  });
});


  


