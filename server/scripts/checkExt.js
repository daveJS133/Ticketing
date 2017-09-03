const urlBuilder = require('./urlBuilder')
const requestTime = require('./requestTime')
const http = require('http');

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

module.exports = checkExternal