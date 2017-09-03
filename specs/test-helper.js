'use strict'

const Bluebird = require('Bluebird');
const config = require('../server/config');

// Use test db
const dbUrl = config.get('DB_URI')+'-test';

config.set('DB_URI', dbUrl);
config.set('DEBUG', false);
config.set('ENV', 'test');

//Drop a collection when passed a model in test env only
exports.dropCollection = function(Model){
  if(config.get('ENV') !== 'test') return Bluebird.reject()
    return Model.remove({})
};

exports.server = require('../server/server');

