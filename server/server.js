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

//For api endpoints
server.use(compression());
server.use('/api', api);

//Request external data -- to modularise
let initial = true;

checkExternal(true, initial);

setInterval(function(){
  checkExternal(true, this.initial);
}.bind({initial:initial}), 8.64e+7, initial);


function checkExternal(isAuto, initial) {

  let path = urlBuilder([], requestTime.checkInitial(initial));
  let options = {
    hostname: 'api.edinburghfestivalcity.com',
    port: '80',
    path: path,
    method:'GET',
    headers: {'accept': 'application/json;ver=2.0'}
  };
 
  http.request(options,(res) => {
    var body = '';
    res.on('data',(chunk) =>{
      body+= chunk;
    });

    res.on('end',() =>{
      var page = JSON.parse(body);
    });
  }).end();
};



module.exports = server;

