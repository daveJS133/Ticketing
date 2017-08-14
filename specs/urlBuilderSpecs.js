var request = require('supertest');
var app = require('../server/urlBuilder');

describe('Path & signiture is returned', function () {
  it('creates a path with no query', function (done) {
    urlBuilder.build([])
    .expect('', done);
  });
  it('creates a path with a query', function (done) {
    urlBuilder.build(['price>4'])
    .expect('', done);
  });
});