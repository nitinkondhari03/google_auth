const express=require("express")
const { register } = require("../controller/userController")


const routers=express.Router()

routers.post("/register",register)
module.exports={routers}