const express=require("express");
const user = require("./user");
const dbconnect = require("./dbconnect");
const isvaild=require("./isvaild");
const app=express();

app.use(express.json())

app.get("/",async(req,res)=>{
    let data=await user.find();
    res.send(data);
});

app.post("/",isvaild , async(req,res)=>{
    console.log(req.body);
    let data = await user.create(req.body);
    res.send(data);


});

app.delete("/:id",async(req,res)=>{
    let {id}=req.params;
    let data=await user.findByIdAndDelete(id);
    res.send("delete");
});
app.patch("/:id",async(req,res)=>{
    let {id}=req.params;
    let data=await user.findByIdAndUpdate(id,res.body);

    res.send(data);
})
app.listen(8560,(req,res)=>{
    dbconnect();
});