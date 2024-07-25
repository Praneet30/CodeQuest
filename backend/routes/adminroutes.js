const router=require("express").Router();
const adminController=require("../controllers/adminController");

router.get("/users",adminController.manageusers)
router.put("/users/:id",adminController.updateUser)
router.delete("/users/:id",adminController.deleteUser)
router.get('/getproblems', adminController.getProblems);
router.get('/problem/:id', adminController.getProblemById); // Added route to get a single problem
router.put('/updateproblem/:id', adminController.updateProblem);
router.delete("/problem/:id",adminController.deleteProblem);
router.get('/getsubmissions',adminController.get_submissions);

module.exports=router;

