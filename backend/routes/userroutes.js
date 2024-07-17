const router=require('express').Router();
const verifyToken=require('../middleware/auth');
const userController=require('../controllers/userController');


router.get("/:id",verifyToken,userController.get_user)
router.put("/edit/:id",verifyToken,userController.edit_user);

module.exports=router;