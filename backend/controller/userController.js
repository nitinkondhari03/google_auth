const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const {Users}=require("../model/userModel")
require("dotenv").config()
module.exports.register=async(req,res)=>{
  const {username,email,password}=req.body
     try {
      const usernamecheck = await Users.findOne({ username });
      if (usernamecheck) {
        return res.json({ msg: "Username already used", status: false });
      }
      const emailcheck = await Users.findOne({ email });
      if (emailcheck) {
        return res.json({ msg: "Email already used", status: false });
      }
      const hashPassword=await bcrypt.hash(password,10)
      const user=await Users.create({
        username,
        email,
        password:hashPassword
      })
 
      jwt.sign({user},process.env.PRAVIT_KEY,{expiresIn:"1h"},(err,token)=>{
        if(err){
          res.send({msg:"error",err})
        }else{
res.json({token,user})
        }
      })
     } catch (error) {
      res.send({status: false,error})
     }
   }

module.exports.login=async(req,res)=>{
  const {username,password}=req.body
try {
    const usernamecheck=await Users.findOne({username})
    if(!usernamecheck){
      res.send({ msg: "Incorrect username or password", status: false})
    }
    const isPassword=await bcrypt.compare(password,usernamecheck.password)
    if(!isPassword){
      res.send({ msg: "Incorrect username or password", status: false})
    }
    jwt.sign({usernamecheck},process.env.PRAVIT_KEY,{expiresIn:"1h"},(err,token)=>{
      if(err){
      return  res.send({msg:"error",err})
      }else{
 return res.json({token,usernamecheck})
      }
    })
} catch (error) {
  
}
}