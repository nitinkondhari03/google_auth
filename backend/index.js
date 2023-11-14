const express=require("express")
const jwt=require("jsonwebtoken")
require("dotenv").config()
const app=express()
const {connection}=require("./config/config")
const { routers } = require("./Routes/UserRoutes")
const { routing } = require("./Routes/productRoutes")
app.use(express.json())

app.use("/product",routing)
app.use("/api",routers)

// app.post("/login",(req,res)=>{
//       const user={
//             id:1,
//             username:"nitin",
//             email:"abc@gmail.com",
//       }
//       jwt.sign(user,privatekey,{expiresIn:"300s"},(err,token)=>{
//             if(err){
//                   res.json(err)
//             }else{
//                   res.json({
//                         token
//                       }) 
//             } 
//       })
// })

// app.post("/profile",verifyToken,(req,res)=>{
// res.json(req.token)
// })
// function verifyToken(req,res,next){
//       const bearerHeader=req.headers["authorization"];
//       if(typeof bearerHeader!=="undefined"){
//             const bearer=bearerHeader.split(" ")
//             const token=bearer[1]
//             jwt.verify(token,privatekey,(err,authdata)=>{
//                   if(err){
//                         res.send("invalid token")
//                   }else{
//                         req.token=authdata
//                         next()
//                   }
//             })
         
//       }else{
//             res.send({
//                   result:"Token is not valid"
//             })
//       }
// }

app.listen(process.env.PORT,async()=>{
      try {
            await connection
            console.log("server is connect MongoDb")
      } catch (error) {
            console.log(error)
      }
})