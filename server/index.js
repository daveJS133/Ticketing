'use strict'

let nconf = require('./config');
let server = require('./server');
let port = nconf.get('PORT') || 3000;

server.listen(port, () => {
  console.log('Running on port: '+port);
});