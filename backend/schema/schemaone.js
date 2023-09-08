const mongoose=require ("mongoose");
const userSchema=new mongoose.Schema({

    name:{
        type:String
    },
    address:{
        type:String
    }
});


const users=new mongoose.model("ducat",userSchema);
module.exports=users;
