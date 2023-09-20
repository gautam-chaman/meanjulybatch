const express=require("express");
const cors=require ("cors");
const app= express();
const PORT=5000;
const Router=require('./router/routes')

require("./db/connection");

app.use(cors());
 app.use(express.json());
 app.use(Router);


app.listen(PORT,()=>{

    console.log(`server is running on ${PORT}`);
})
