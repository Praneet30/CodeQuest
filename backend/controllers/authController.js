const User=require('../models/userschema');
const jwt=require('jsonwebtoken');
const dotenv=require('dotenv');
const userschema = require('../models/userschema');
dotenv.config();

const signup_post = async (req, res) => {
    const { username, email, password, contact } = req.body;
    
    try {
      const existingUser = await User.findOne({
        $or: [
          { username: username },
          { email: email },
          { contact: contact }
        ]
      });
      
      if (existingUser) {
        let message = '';
        if (existingUser.username === username) {
          message = 'Username already exists';
        } else if (existingUser.email === email) {
          message = 'Email already exists';
        } else if (existingUser.contact === contact) {
          message = 'Contact number already exists';
        }
        return res.status(400).json({ message });
      }
  
      const user = new User({ username, email, password,contact });
      await user.save();
      res.status(200).json({ message: "User registered successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error in registering user" });
    }
  };
  

  const login_post = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email); 
       
        const user = await userschema.findOne({ email: email });
       
        if (!user) {
            console.log("User not found"); // Debugging log
            return res.status(401).json({ success: false, message: "Email does not exist" });
        }
        if (password !==user.password) {
            console.log("Password does not match"); // Debugging log
            return res.status(401).json({ success: false, message: "Incorrect Password" });
        }

        // Generate a JWT token
        const token = jwt.sign(
            {
                email: user.email,
                _id: user._id,
                role: 'user'
            },
            process.env.JWT_SECRET,
            { expiresIn: "24h" }
        );

        // Respond with the user information and token
        res.status(200).json({ success: true, message: "User login successful", user, token, role: "user" });
    } catch (err) {
        console.error("Internal Server Error:", err); // Improved logging
        res.status(500).json({ message: "Internal server error" });
    }
};
  

module.exports={signup_post,login_post}