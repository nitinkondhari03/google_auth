const express=require("express")
const {verifyToken}=require("../middleware/auth")
const { product } = require("../controller/productController")

const routing=express.Router()


routing.get("/allproduct",verifyToken,product)


module.exports={routing}