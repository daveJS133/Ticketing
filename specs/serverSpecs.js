const helper = require('./server/test-helper');
const Event = require('./server/models/event');
const request = require('supertest-as-promised')(helper.app);
const testEvent = require('./testEvent')
const server = require('../server/server');
const URL = '/api/v1/events'

describe('Events', function () {
  let event
  before(function () {
    return helper.dropCollection(Event)
  });
  it('should add an event', function () {
    const data = testEvent
    return request
    .post(URL)
    .send(data)
    .then(function(res){
      event = res.body
      assert.equal(res.body.artist, data.artist)
      assert(res.body.id);
    })
  });
});

describe('Server serving API', function () {
  it('Returns 200 status code', function (done) {
    request(server)
    .checkExternal(true, true)
    .expect(res.status == '200', done);
  });

  it('Response returns ok', function (done) {
    request(server)
    .checkExternal()
    .expect('OK', done);
  });

    it('Returns JSON format', function (done) {
      request(server)
      .checkExternal()
    .expect('Content-Type', /json/, done);
  });
});


  


