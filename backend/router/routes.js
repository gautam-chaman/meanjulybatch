const express =require("express");
const users=require("../schema/schema1");
const Router=express.Router();



// get all data api =====================================================

Router.get("/getdata",async(req,res)=>{

    const allusers=await users.find();
    res.json(allusers);
    console.log(allusers)
});

//end of GET api =======================================================



//Start of Post API ======================================================

Router.post("/insertdata",async(req,res)=>{

    const{user,email,age,address,paddress,mobile,pass,repass}=req.body;
    const adduser=new users({user,email,age,address,paddress,mobile,pass,repass});
    await adduser.save();
    res.status(201).json(adduser);
    console.log(adduser)
});

// Post API IS END HERE =====================================


// View Api Start here =====================================

Router.get("/view/:id", async(req,res)=>
{

    console.log(req.params);
    const {id}=req.params;
    const singleuser=await users.findById({_id:id});
    console.log(singleuser);
    res.status(201).json(singleuser);

});


// View API is end here ======================================



//Delete API is Start here ================================


Router.delete("/deleterecord/:id", async(req,res)=>{
const {id}=req.params;
const a = await users.findByIdAndDelete({_id:id});
console.log(a);
res.status(201).json(a);


});

// delete api is end here =====================================


//update api is start here ===============================================

Router.post("/update/:id", async(req,res)=>{

const {id}=req.params;
const updaterecord=await users.findByIdAndUpdate(id,req.body,{new:true});
console.log(updaterecord);
res.status(201).json(updaterecord);

})

//single get data api =========================================================


Router.get("/singledata/:id",async(req,res)=>{
    const {id}=req.params;

    const allusers=await users.find({_id:id});
    res.json(allusers);
    console.log(allusers)
});


// single A[pi is Start here



// login api is start here

// Router.post("/loginuser",async(req,res)=>{
// console.log(req.body);
// const {email,pass}=req.body;

// if(!email||!pass){
//     return res.status(422).json({error:"email and password is not match"})
// }
// try{
//     const uservalid=await users.findOne({email:email})
//     console.log(uservalid)
// }
// })


Router.post("/login",async(req,res)=>{
const {email,pass}=req.body;

if(!email || !pass){
    return res.status(422).json({error:"email or pass did not match"})
}

else{
    const a=await users.findOne({email:email});
    console.log(a);

if(a.email===email && a.pass===pass){
    return res.status(206).json({message:"welcome",status:480})
}
else{
    return res.status(244).json({errror:"wrong username/pass did not match"})
}
}
})




module.exports=Router;