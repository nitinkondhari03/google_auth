const {User}=require("../model/userModel")

module.exports.register=async(req,res)=>{
      let user=req.body
   try {
      let userss=User(user)
      const users=await userss.save()
      res.json(users)
   } catch (error) {
      res.json({"error":error})
   }
}