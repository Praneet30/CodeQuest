const User=require('../models/userschema');


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
  
  

module.exports={signup_post}