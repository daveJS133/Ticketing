var express = require("express");

var Event = require("../../models/event");
var PerformanceSpace = require("../../models/performanceSpace");
var Venue = require("../../models/venue");



function internalCrud(data, model){
    function create(data, model){
        model.object.create(data, function (err, data) {
            if(err){
                console.log(err);
            }
            else{
                model.template = data;
                model.template.save();
            }
        })
    }

}
module.exports = internalCrud;