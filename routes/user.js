const express=require("express");
const router= express.Router();
const{handleGetAllUsers}=require("../controllers/user")
const{handelGetUserById,handleUserUpdateById,handleDeleteUserById,handleCreateUser}=require("../controllers/user")


router.use(express.urlencoded({ extended: false }));

// app.use((req,res,next) => {
//     console.log("hello from middleware");
//     next();
// })


// router.get('/user', async(req, res) => {
//     const allDbUsers =await User.find({})
//     const html = `
//     <ul> 
//     ${allDbUsers.map((users) => `<li> ${users.FirstName} </li>`)}
//   </ul>
//     `;
//     res.send(html);
// });



router.route("/:id")
    .get(handelGetUserById)
    .patch(handleUserUpdateById)
    .delete(handleDeleteUserById);



router.get('/',handleGetAllUsers)


// app.get('/api/user/:id', async(req, res) => {
//     const users=await User.findById(req.params.id);
   
//     return res.json(users);
// })

router.post('/', handleCreateUser)

    module.exports=router;