
const express=require("express");
const app =express();
require("./db/connection");
const cors =require("cors");
const router=require("./routes/route");



app.use(cors());
app.use(express.json());
app.use(router);


app.listen(PORT,()=>{
    console.log(`application is running at ${PORT}`);
})