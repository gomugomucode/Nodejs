
const express = require('express');
const http = require('http');

const app = express();

// ?middleware

app.use((req,res,next)=>{
  console.log("First came first serverd", req.url,req.method)
})

const port = 3001


app.listen(port,()=>{
  console.log(`Server starting at http://localhost:${port}/`)
})
