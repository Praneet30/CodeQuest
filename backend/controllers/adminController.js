const mongoose = require("mongoose");
const User = require("../models/userschema");


// get all users data for admin
const manageusers=async (req,res)=>{
  try {
    const users = await User.find({},['-profilePicture','-password']) 
    res.status(200).json({
      success: true,
      data: users
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({
      success: false,
      error: 'Internal Server Error'
    });
  }
}

const updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const { username, contact } = req.body;
      const user = await User.findByIdAndUpdate(id, { username, contact }, { new: true });
  
      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'User not found',
        });
      }
  
      res.status(200).json({
        success: true,
        data: user,
      });
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({
        success: false,
        error: 'Internal Server Error',
      });
    }
  };

  const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByIdAndDelete(id);
  
      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'User not found',
        });
      }
  
      res.status(200).json({
        success: true,
        message: 'User deleted successfully',
      });
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({
        success: false,
        error: 'Internal Server Error',
      });
    }
  };
  


module.exports = { manageusers, updateUser,deleteUser };
