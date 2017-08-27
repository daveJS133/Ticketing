import angular from 'angular'

(function(){

  var express = require('express');
  var app = angular.module('events', [express()])
  .controller('eventController', function(){
    this.event = //request to OUR api
  });





  module.exports = app;

})():
