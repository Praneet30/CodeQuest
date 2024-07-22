const router = require("express").Router();
const verifyToken = require("../middleware/auth");
const problemController = require("../controllers/problemController");
const upload = require('../middleware/fileUpload');



const dotenv = require("dotenv");
dotenv.config();



router.post("/runproblem", verifyToken, problemController.runproblem_post);
router.post('/addproblem', upload.fields([{ name: 'inputFile' }, { name: 'outputFile' }]), problemController.addproblem_post);
router.get('/getproblems', problemController.getProblems);
router.get("/getproblem/:id", problemController.singleproblem_get);

module.exports = router;
