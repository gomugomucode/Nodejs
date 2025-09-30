

const express = require("express")
const http = require("http")


const app = express()


const port  = 8909



app.listen((req,res)=>{
  console,log(`Server starting at http://localhost:{port}/`)
})