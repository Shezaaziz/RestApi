const express = require("express");
const fs = require("fs");
const mongoose=require("mongoose");

const app = express();
const port = 8000;


//conect 
mongoose
.connect("mongodb://localhost:27017/youtube-app-1")
.then(()=>console.log("Mongodb connected"))
.catch(()=>console.lod("mongo error",err))

//schema
const userSchema=new mongoose.Schema({
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    email:{
   type:String,
   required:true,

    },
    JobTitle:{
        type:String,
        required:true

    },
    Gender:{
    type:String,
    required:true,
    }
},{timestamps:true});


const User=mongoose.model("user",userSchema);
//routes
app.use(express.urlencoded({ extended: false }));

app.use((req,res,next) => {
    console.log("hello from middleware");
    next();
})


app.get('/user', async(req, res) => {
    const allDbUsers =await User.find({})
    const html = `
    <ul> 
    ${allDbUsers.map((users) => `<li> ${users.FirstName} </li>`)}
  </ul>
    `;
    res.send(html);
});



app.route("/api/user/:id")
    .get(async(req, res) => {
     const users=await User.findById(req.params.id);
        return res.json(users);
    })
    .patch(async(req, res) => {
        const users=await User.findByIdAndUpdate(req.params.id,{LastName:"changed"});
        return res.json({ status: "sucess" });
    })
    .delete(async(req, res) => {
        const users=await User.findByIdAndDelete(req.params.id)
        return res.json({ status: "sucess" });
    });



app.get('/api/user',async(req, res) => {
     const allDbUsers =await User.find({})

    return res.json(allDbUsers);
})


// app.get('/api/user/:id', async(req, res) => {
//     const users=await User.findById(req.params.id);
   
//     return res.json(users);
// })

app.post('/api/users', async(req, res) => {
    const body =req.body;
    if(!body||
        !body.first_name||
        !body.last_name||
            !body.email||
                !body.job_title||
                !body.gender){
return res.status(400).json({ msg: "All fields are required" })};

 const result= await User.create({
  FirstName:body.first_name,
  LastName:body.last_name,
  email:body.email,
  JobTitle:body.job_title,
  Gender:body.gender,
  });

  console.log(result);
  return res.status(201).json({msg:"sucess"});
    })

  
// app.patch('/api/edit/:id',(req,res)=>{
//     return res.json({status:"pending"});
// })

// app.delete('/api/delete/:id',(req,res)=>{
// //      return res.json({status:"pending"});
// })



app.listen(port, () => { console.log(`server started at port: ${port}`) });