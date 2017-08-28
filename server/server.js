//Server dependecies
const express = require('express');
const server = express();

//Api dependencies
const http = require('http');
const api =  require('./api');
const compression = require('compression');

//Db dependencies
const mongoose = require('mongoose');

//Script dependencies
const urlBuilder = require('./scripts/urlBuilder');
const requestTime = require('./scripts/requestTime');
const checkExternal = require('./scripts/checkExt')
//For api endpoints
server.use(compression());
server.use('/api', api);

//Request external data -- to modularise
let initial = true;

checkExternal(true, initial);

setInterval(function(){
  checkExternal(true, this.initial);
}.bind({initial:initial}), 8.64e+7, initial);

module.exports = server;

