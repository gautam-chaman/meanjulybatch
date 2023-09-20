const express =require("express");
const users=require("../schema/schema1");
const Router=express.Router();



// get all data api

Router.get("/getdata",async(req,res)=>{

    const allusers=await users.find();
    res.json(allusers);
    console.log(allusers)
});

//end of GET api



//Start of Post API

Router.post("/insertdata",async(req,res)=>{

    const{user,email,age,address,paddress,mobile,pass,repass}=req.body;
    const adduser=new users({user,email,age,address,paddress,mobile,pass,repass});
    await adduser.save();
    res.status(201).json(adduser);
    console.log(adduser)
});

// Post API IS END HERE


// View Api Start here

Router.get("/view/:id", async(req,res)=>
{

    console.log(req.params);
    const {id}=req.params;
    const singleuser=await users.findById({_id:id});
    console.log(singleuser);
    res.status(201).json(singleuser);

});


// View API is end here 



//Delete API is Start here


Router.delete("/delete/:id", async(req,res)=>{
const {id}=req.params;
const a = await users.findByIdAndDelete({_id:id});
console.log(a);
res.status(201).json(a);


})




module.exports=Router;