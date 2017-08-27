// (function(){
//   var express = require('express');
//   var app = angular.module('events', [express()]);
//   var urlBuilder = require('./server/urlBuilder');
//   var testEvent = require('./specs/testEvent');
//   var getRequestTime = require('./server/requestTime');
//   var initial = true;

//   app.use(express.static('public'));


//   app.controller('EventListController', function(){
//     this.product = setInterval(checkapi(initial), 4.32e+7);
//   });


//   function checkapi(initial) {

//     let path = urlBuilder.build([], getRequestTime(initial));

//     http.get({
//       hostname: 'api.edinburghfestivalcity.com',
//       path: path,
//     agent: false  // create a new agent just for this one request
//   }, (res) => {

//   }).on('socket', (socket) => {
//     socket.emit('agentRemove');
//   });}



//   module.exports = app;

// })():
