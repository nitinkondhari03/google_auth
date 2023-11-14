const mongoose=require("mongoose")
require("dotenv").config()


const connection=mongoose.connect(process.env.MONGO_URL).catch((error)=>{
      console.log("monggose connection error")
})
// mongoose.connection.on('connected', function () {  
//       console.log('Mongoose default connection open to ');
//     }); 
    
//     // If the connection throws an error
//     mongoose.connection.on('error',function (err) {  
//       console.log('Mongoose default connection error: ');
      
//     }); 
  

module.exports={connection}