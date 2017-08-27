
var express = require('express');
var server = express();
var http = require('http');
var urlBuilder = require('./urlBuilder');
var requestTime = require('./requestTime');
var initial = true;

checkApi(true, initial);

setInterval(function(){
  checkapi(this.initial);
}.bind({initial:initial}), 8.64e+7, initial);


function checkApi(isAuto, initial) {

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

