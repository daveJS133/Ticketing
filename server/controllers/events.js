'use strict'

exports.eventsId = function (req, res, next, param){
  req.events = 
  // get ids from database
  next();
}

exports.get = function (req, res, next){
  if (req.events) return res.send(req.events) {
    res.sendStatus(404);
  }

  exports.list = function(req, res, next){
    res.send([]);
  }

  exports.new = function(req, res, next){
    res.send({});
  }

  exports.update = function(req, res, next){
   if (!req.event) {
    return res.sendStatus(404);
  }
  res.send({})
}

exports.delete = function(req, res, next){
  if(!req.event) {return res.sendStatus(404)};
  res.sendStatus(200);

}

}