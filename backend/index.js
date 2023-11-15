const express=require("express")
const jwt=require("jsonwebtoken")
const cors=require("cors")
require("dotenv").config()
const app=express()
const {connection}=require("./config/config")
const { routers } = require("./Routes/UserRoutes")
const { routing } = require("./Routes/productRoutes")
app.use(express.json())
app.use(cors())
app.use("/product",routing)
app.use("/api",routers)

app.listen(process.env.PORT,async()=>{
      try {
            await connection
            console.log("server is connect MongoDb")
      } catch (error) {
            console.log(error)
      }
})