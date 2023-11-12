const exp = require("constants")
const express=require("express")
const jwt=require("jsonwebtoken")
const app=express()

app.use(express.json())

app.get("/",(req,res)=>{
      res.json({
            message:"a sample api"
      })
})

app.listen(8080,()=>{
      console.log('server is running post 8080')
})