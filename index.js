const express = require("express");
const fs = require("fs");
const {connectMongoDb}=require("./connection")
const userRouter=require("./routes/user")
const app = express();
const port = 8000;


//conect 

connectMongoDb("mongodb://localhost:27017/youtube-app-1");
//schema


//routes


  
// app.patch('/api/edit/:id',(req,res)=>{
//     return res.json({status:"pending"});
// })

// app.delete('/api/delete/:id',(req,res)=>{
// //      return res.json({status:"pending"});
// })


app.use("/user",userRouter);
app.listen(port, () => { console.log(`server started at port: ${port}`) });