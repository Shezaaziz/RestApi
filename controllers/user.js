const User=require("../models/user");

async function handleGetAllUsers(req,res){
 const allDbUsers =await User.find({})
    return res.json(allDbUsers);
}

async function handelGetUserById(req,res) {
     const users=await User.findById(req.params.id);
        return res.json(users);
}


async function handleUserUpdateById(req,res){
    const users=await User.findByIdAndUpdate(req.params.id,{LastName:"changed"});
        return res.json({ status: "sucess" });
}


async function handleDeleteUserById(req,res){
     const users=await User.findByIdAndDelete(req.params.id)
        return res.json({ status: "sucess" });
}

async function handleCreateUser(req,res){
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
  return res.status(201).json({msg:"sucess",id:result._id});
    }


module.exports={
      handleGetAllUsers,
 handelGetUserById,
  handleUserUpdateById,
  handleDeleteUserById,
 handleCreateUser,
}