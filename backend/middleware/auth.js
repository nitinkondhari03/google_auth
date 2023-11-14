const jwt=require("jsonwebtoken")
require("dotenv").config()

function verifyToken(req,res,next){
      const bearerHeader=req.headers["authorization"];
      if(typeof bearerHeader!=="undefined"){
            const bearer=bearerHeader.split(" ")
            const token=bearer[1]
            jwt.verify(token,process.env.PRAVIT_KEY,(err,authdata)=>{
                  if(err){
                        res.send("invalid token")
                  }else{
                        req.token=authdata
                        next()
                  }
            })
         
      }else{
            res.send({
                  result:"Token is not valid"
            })
      }
}
module.exports={verifyToken}