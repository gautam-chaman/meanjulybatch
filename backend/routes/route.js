const express=require("express");
const users=require("../schema/schemaone");
const router=express.Router();

//get api create start now here

router.get("/getdata",async(req,res)=>{
    const alluser=await users.find();
    res.json(allusers);
    console.log(allusers);
});


// end of get api here 
