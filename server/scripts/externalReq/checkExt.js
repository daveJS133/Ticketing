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
  apiRequest = new Promise((resolve, reject) => {
    http.request(options,(res) => {
      var body = '';
      res.on('data',(chunk) =>{
        body+= chunk;
      });

      res.on('end',(result) =>{
        var page = JSON.parse(body);
        result = {"status":res.statusCode, "page":page}
        return result
      });
      return result
    }).end(result);

    if (result.status < 200 || result.status > 299) {
      reject(new Error('Failed to load page, status code: ' + res.statusCode));
    } else{
      resolve(result);
    }
  });

  apiRequest.then((result) => {
    console.log('api request -')
    return result
  }).catch((err) => {
    console.log(err );
    return err
  });

};

module.exports = checkExternal