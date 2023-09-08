const mongoose=require("mongoose");
const DB="mongodb+srv://chamangautamme:gautam221@cluster0.moflkhm.mongodb.net/ducat";
mongoose.connect(DB,{

    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>console.log("connection start")).catch((error)=>console.log(error.message));
