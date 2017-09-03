const helper = require('../test-helper');
const request = require('supertest')(helper.app);
const URL = '/api/v1/events'
const assert = require('assert');
const requestTime = require('../../server/scripts/requestTime');

describe('getTimeStamp', function () {
  it('Returns a string', function (done) {
    assert.equal(typeof requestTime.getTimeStamp(), 'string')
    done();
 });
});


describe('checkInitial', function () {
  it('returns falsey when initial is true', function (done) {
    assert.equal(requestTime.checkInitial(true), undefined)
    done();
  });
  it('returns date string when initial is false', function (done) {
    assert.deepEqual(requestTime.checkInitial(false), requestTime.getTimeStamp())
    done();
  });
});






