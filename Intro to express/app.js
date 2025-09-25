
const express = require('express');
const http = require('http');

const app = express();

const port = 3001


app.listen(port,()=>{
  console.log(`Server starting at http://localhost:${port}/`)
})
