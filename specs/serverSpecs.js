const helper = require('./test-helper');
const Event = require('../server/models/event');
const request = require('supertest')(helper.app);
const testEvent = require('./testEvent')
const server = require('../server/server');
const URL = '/api/v1/events'
let checkExternal = require('../server/scripts/checkExt');
const assert = require('assert');

describe('Server initially requesting external API', function () {

  it('Returns 200 status code', function (done) {
    let result = checkExternal(true,true);
    assert.equal(result.status,200);
    done();
  });

  it('Returns JSON format', async function () {
    assert.equal(result.body,{}.constructor);
  });


});

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






