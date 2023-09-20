const mongoose =require("mongoose");
const DB="mongodb+srv://chamangautamme:Gautam221@cluster0.moflkhm.mongodb.net/newmeanbatch";

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("connection start ")).catch((error)=>console.log(error.message));