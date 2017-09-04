var crypto = require('crypto');

function build (queries, isAuto, requestTime) {
  const secretKey = require('./secretKey');
  const privateKey = String(
    Object.freeze(secretKey)
    );
  const publicKey = String(Object.freeze('CgdAh5HhEAtCIihS'));
  let path = '/events?key=' +publicKey;


  if (queries.length !== 0){
    queries.forEach(function(element){
      path += ('&' + String(element));
    });
  };

  if (isAuto == true){
    path+='&size=100';
  }

  if(requestTime !== undefined){
    path+= '&modified_from='+String(requestTime);
  };
  var hash = crypto.createHmac('sha1', privateKey)
  .update(path)
  .digest('hex');
  console.log(path+'&signature='+hash);
  return path+'&signature='+hash;
}


module.exports = build;

