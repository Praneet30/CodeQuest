const router=require("express").Router();
const adminController=require("../controllers/adminController");

router.get("/users",adminController.manageusers)
router.put("/users/:id",adminController.updateUser)
router.delete("/users/:id",adminController.deleteUser)

module.exports=router;

