var hmacsha1 = require('hmacsha1');



function build (queries, isAuto, requestTime) {
  const secretKey = require('secretKey');
  const privateKey = Object.freeze(secretKey);
  const publicKey = Object.freeze('CgdAh5HhEAtCIihS');
  let path = '/events/?key=' +publicKey;


  if (queries.length !== 0){
    queries.forEach(function(element){
      path += ('&' + element);
    });
  }

  if (isAuto == true){
    path+='&size=100';
  }

  if(requestTime !== null){
    path+= '&modified_from='+requestTime;
  }


  let hash = hmacsha1(privateKey, path);
  return path+'&signature='+hash;
}


module.exports = build;

