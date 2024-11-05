const express=require('express');
const app=express();
const router=express.Router();
const {fetchAllUsers, fetchUser,addUser,upDateUser, deleteUser,}=require('../Controllers/07-Controllers')
router.get('/',fetchAllUsers)
//getOnePerson
router.get('/:id',fetchUser)
// Add user
router.post('/user',addUser);
// UPDATE User
router.put("/:id",upDateUser)
// Delete user
router.delete("/:id",deleteUser)
module.exports=router;