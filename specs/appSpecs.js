var request = require('supertest');
var app = require('../app');


describe  ('Requests to the root path', function(){
  it('Returns a 200 status code', function(done){
    request(app)
    .get('/')
    .expect(200)
    .end(function(error) {
      if(error) throw error;
      done();
    });
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


