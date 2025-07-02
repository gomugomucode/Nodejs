const http = require('node:http');

const requesthandler = require('./form')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(requesthandler);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});