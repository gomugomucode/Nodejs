// // Import the 'http' module.
// const http = require('http');

// // Create a server and have it listen on port 3000.
// const PORT =3001
// // The request listener is defined directly inside the createServer call.
// http.createServer((req, res) => {
//   // Set the response header.
//   res.writeHead(200, {'Content-Type': 'text/plain'});
  
//   // Send the response body and end the connection.
//   res.end('Hello, World!\n');
// }).listen(PORT, () => {
//   // Log a message to the console when the server starts.
//   console.log(`Server running at http://localhost:${PORT}`);
// })


const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});