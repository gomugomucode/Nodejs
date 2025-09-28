
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


const port = 3001


app.listen(port,()=>{
  console.log(`Server starting at http://localhost:${port}/`)
})
