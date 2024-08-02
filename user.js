const mongoose=require("mongoose");

const userschema= new mongoose.Schema({
    username:String,
    number:Number,
    email:String,
    password:Number,
})


let user = mongoose.model("user",userschema);

module.exports=user