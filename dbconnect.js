const mongoose=require("mongoose");

const dbconnect= async()=>{
    await mongoose.connect("mongodb://localhost:27017/node");
    console.log("succesfully conntected");
}

module.exports=dbconnect