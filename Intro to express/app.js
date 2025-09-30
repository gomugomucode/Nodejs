
const express = require('express');
const http = require('http');

const app = express();

// ?middleware

// first way to use //////9diretly make middleware and use by app.use(function like req, res, next)

// app.use((req,res,next)=>{
//   console.log("First came first serverd", req.url,req.method);
//   next()     // move ti next middleware or route 
// })


// second way to use
// A new simple middleware is defined to replace the missing 'myMiddleware'
function simpleLogger(req, res, next) {
  console.log("-> Global Logger (simpleLogger) served");
  console.log(`-> Method: ${req.method}`);
  console.log(`-> URL: ${req.url}`);
  // Pass control to the next middleware/route handler
  next();
}

function myMiddleware1(req, res, next) {
  console.log("-> myMiddleware1 served: Adds current timestamp to request");
  req.requestTime = new Date().toISOString(); // Example: adding data to req object
  // Pass control to the next middleware/route handler
  next(); 
}

// myMiddleware2 is repurposed to demonstrate a middleware that TERMINATES the request
function myMiddleware2(req, res, next) {
  // IMPORTANT: If this middleware executes, it will send a response and STOP the cycle.
  // It will prevent myMiddleware1 and the route handlers from running.
  console.log("-> myMiddleware2 served: This middleware always terminates the request early.");
  res.status(503).send("Second come, first served - Service Unavailable (Terminated by myMiddleware2)");
  // NO next() call here because the response is sent.
}


// --- Middleware Application ---

// 1. Corrected 'app.use(myMiddleware)' to use the defined 'simpleLogger'
app.use(simpleLogger); 

// 2. This middleware will run on every request
app.use(myMiddleware1); 


// --- Route Handlers ---

app.get('/', (req, res) => {
  // req.requestTime is available here because of myMiddleware1
  res.send(`Hello from Express! Middleware executed successfully. Request Time: ${req.requestTime}`);
});

app.get('/about', (req, res) => {
  res.send('Hello from Express! About page.');
});

// A route that uses a specific middleware (a third way to use middleware)
app.get('/special', myMiddleware1, (req, res) => {
    res.send(`Special Route. Timestamp added: ${req.requestTime}`);
});


const port = 3001;

app.listen(port, () => {
  console.log(`Server starting at http://localhost:${port}/`);
});

