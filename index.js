const express = require('express')
require('dotenv').config()
const app =express()
const port=4000
app.get('/',(req,res)=>{
  res.send('hello world')
})
app.get('/tiwitter',(req,res)=>{
  res.send('hello tiwitter')
})
app.get('/login',(req,res)=>{
  res.send('hello login')
})
app.listen(process.env.PORT,()=>{
  console.log(`listenning on port ${port}`);
  
})