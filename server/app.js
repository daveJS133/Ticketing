
var express = require('express');
var app = express();
var http = require('http');
var urlBuilder = require('./urlBuilder');
var requestTime = require('./requestTime');
var initial = true;

checkapi(initial);

setInterval(function(){
  console.log('running interval');
  checkapi(this.initial);
}.bind({initial:initial}), 8.64e+7, initial);


function checkapi(initial) {

  let path = urlBuilder([], requestTime.check(initial));
  let options = {
    hostname: 'api.edinburghfestivalcity.com',
    port: '80',
    path: path,
    method:'GET',
    headers: {'accept': 'application/json;ver=2.0'}
  };
  console.log(options.hostname+options.path);
  http.request(options,(res) => {
    var body = '';
    res.on('data',(chunk) =>{
      body+= chunk;
    });

    res.on('end',() =>{
      var page = JSON.parse(body);
      console.log(page);
    });
  }).end();
};



module.exports = app;

