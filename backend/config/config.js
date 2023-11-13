const mongoose=require("mongoose")


const connection=mongoose.connect("mongodb://127.0.0.1:27017/login").catch((error)=>{
      console.log("monggose connection error")
})
mongoose.connection.on('connected', function () {  
      console.log('Mongoose default connection open to ');
    }); 
    
    // If the connection throws an error
    mongoose.connection.on('error',function (err) {  
      console.log('Mongoose default connection error: ');
      process.exit(); 
    }); 
  

module.exports={connection}