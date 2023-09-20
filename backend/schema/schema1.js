const mongoose =require ("mongoose");
const userSchema=new mongoose.Schema({
    user:{
        type:String
    },
    email:{
        type:String
    },
    age:{
        type:String
    },
    address:{
        type:String
    },
    paddress:{
        type:String
    },
    mobile:{
        type:Number
    },
    pass:{
        type:String
    },
    repass:{
        type:String
    }
});

const users = new mongoose.model("newmeanbatches",userSchema);
module.exports = users;