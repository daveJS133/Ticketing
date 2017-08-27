var request = require('supertest');
var server = require('../server/server');
var testEvent = require('./testEvent')

describe('Accessing API', function () {
  it('Returns 200 status code', function (done) {
    request(server)
    .checkApi()
    .expect(200, done);
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


  


