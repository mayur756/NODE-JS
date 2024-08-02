const isvaild=(req,res,next)=>{
    let{username,email,password}=req.body;

    if(username && password && number){
        next();
    }
    else{
        res.send("invaild deatil");
    }
}

module.exports=isvaild;