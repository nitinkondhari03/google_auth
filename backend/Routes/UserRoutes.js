const express=require("express")
const { register, login } = require("../controller/userController")


const routers=express.Router()

routers.post("/register",register)
routers.post("/login",login)
module.exports={routers}