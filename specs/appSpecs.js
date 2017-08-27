var request = require('supertest');
var app = require('../server/app');
var testEvent = require('./testEvent')

describe  ('Requests to the root path', function(){
  it('Returns a 200 status code', function(done){
    request(app)
    .get('/')
    .expect(200, done);
  });

  it('Returns HTML format', function (done) {
    request(app)
    .get('/')
    .expect('Content-Type', /html/, done);
  });

  it('Returns index file with event', function (done) {
    request(app)
    .get('/')
    .expect(/events/i, done);
  });

});

describe('Accessing API', function () {
  it('Returns 200 status code', function (done) {
    request(app)
    .checkApi()
    .expect(200, done);
  });

  it('Response returns ok', function (done) {
    request(app)
    .checkApi()
    .expect('OK', done);
  });
});

describe('Listing events on /events', function () {
  it('Returns 200 status code', function (done) {
    request(app)
    .get('/events')
    .expect(200, done);
  });

    it('Returns JSON format', function (done) {
    request(app)
    .get('/events')
    .expect('Content-Type', /json/, done);
  });




});
  


