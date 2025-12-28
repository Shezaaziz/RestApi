const mongoose=require ("mongoose");

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

module.exports=User;