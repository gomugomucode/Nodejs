
const http = require('http')
const route = require('./route')
const hostname = '127.0.0.1';
const Port = 3000;

const server = http.createServer(route);


server.listen(Port , hostname,()=>{
  console.log(`Starting server at http://${hostname}:${Port}`)
})