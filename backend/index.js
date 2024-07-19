const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()

const authroutes=require('./routes/authroutes');
const userRoutes=require('./routes/userroutes');
const adminRoutes = require('./routes/adminroutes');
const problemRoutes = require('./routes/problemsroutes')

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080

console.log(process.env.MONGODB_URL)
mongoose.set('strictQuery',false);
mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log("connected to database"))
.catch((err)=>console.log(err))


app.get("/",(req,res)=>{
    res.send("Server is running")
})

app.use('/auth', authroutes);
app.use("/user",userRoutes);
app.use('/admin',adminRoutes);
app.use('/problem',problemRoutes);



app.listen(PORT,()=>console.log("server is running at port : "+PORT))