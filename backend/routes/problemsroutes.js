const router = require("express").Router();
const verifyToken = require("../middleware/auth");
const codingController = require("../controllers/problemController");



const dotenv = require("dotenv");
dotenv.config();



router.post("/runproblem", verifyToken, codingController.runproblem_post);


module.exports = router;
