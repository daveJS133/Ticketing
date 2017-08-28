
const express = require('express');
const server = express();
const http = require('http');
const urlBuilder = require('./urlBuilder');
const requestTime = require('./requestTime');
let initial = true;
const api =  require('./api');
const compression = require('compression');

server.use(compression());
server.use('/api', api);

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

