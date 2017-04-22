const server = require('node-mock-server');

server({
  port: 3001,
  restPath: __dirname + '/rest',
  dirName: __dirname,
  urlPath: ''
});