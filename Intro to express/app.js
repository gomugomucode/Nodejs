
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
function myMiddleware(req,res,next){
  console.log("My middleware is served",req.url,req.method);
  next();

}

app.use(myMiddleware)

app.get('/', (req, res) => {
  res.send('Hello from Express! Middleware executed successfully.');
});

const port = 3001


app.listen(port,()=>{
  console.log(`Server starting at http://localhost:${port}/`)
})
