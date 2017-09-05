//Server dependecies
const express = require('express');
const server = express();

//Api dependencies

const api =  require('./api');
const compression = require('compression');

//Db dependencies
const mongoose = require('mongoose');
const config = require('./config');
const bluebird = require('bluebird');
//Script dependencies
const urlBuilder = require('./scripts/externalReq/urlBuilder');
const requestTime = require('./scripts/externalReq/requestTime');
const checkExternal = require('./scripts/externalReq/checkExt');
//For api endpoints
server.use(compression());
server.use('/api', api);

//Connect to mongo
mongoose.Promise = bluebird;
if(!mongoose.connection.db){
  mongoose.connect(config.get('DB_URI'))
};

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'db connection error:'));
db.once('open', console.log.bind(console, 'Connected to mongodb'));

//Request external data
let initial = true;

checkExternal(true, initial);

setInterval(function(){
  checkExternal(true, false)
}, 8.64e+7);

module.exports = server;

