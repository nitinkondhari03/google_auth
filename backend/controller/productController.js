

module.exports.product=(req,res)=>{
 try {
      res.json("user are AUTH")
 } catch (error) {
      res.send("user are not auth")
 }
}