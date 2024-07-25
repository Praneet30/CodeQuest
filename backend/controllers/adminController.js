const mongoose = require("mongoose");
const User = require("../models/userschema");
const Problem = require("../models/problems_model");
const Submission = require("../models/submission_model");


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
  const getProblems = async (req, res) => {
    try {
      const problems = await Problem.find();
      res.status(200).json(problems);
    
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const getProblemById = async (req, res) => {
    try {
      const problem = await Problem.findById(req.params.id);
      if (!problem) {
        return res.status(404).json({ error: 'Problem not found' });
      }
      res.status(200).json(problem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  
  const updateProblem = async (req, res) => {
    try {
      const updates = { ...req.body };
  
      // Remove file fields from updates to keep them unchanged
      delete updates.inputFile;
      delete updates.outputFile;
  
      const updatedProblem = await Problem.findByIdAndUpdate(req.params.id, updates, { new: true });
      if (!updatedProblem) {
        return res.status(404).json({ error: 'Problem not found' });
      }
      res.status(200).json(updatedProblem);
      console.log("hi")
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  const deleteProblem = async (req, res) => {
    const { id } = req.params;
    
    try {
      const result = await Problem.findByIdAndDelete(id);
  
      if (!result) {
        return res.status(404).json({ message: 'Problem not found' });
      }
  
      res.status(200).json({ message: 'Problem deleted successfully' });
    } catch (error) {
      console.error('Error deleting problem:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  const get_submissions = async (req, res) => {
    try {
      const submissions = await Submission.find()
        .populate({
          path: 'userid',
          select: 'username',  // Specify which fields to select from User model
        })
        .populate({
          path: 'problemid',
          select: 'title',  // Specify which fields to select from Problem model
        });
  
      res.status(200).json({
        success: true,
        data: submissions,
      });
      // console.log(submissions.title);
    } catch (error) {
      console.error('Error fetching submissions:', error);
      res.status(500).json({
        success: false,
        error: 'Internal Server Error',
      });
    }
  };
  
  
  


module.exports = { manageusers, updateUser,deleteUser ,getProblems,get_submissions,
  getProblemById,
  updateProblem,
  deleteProblem,};
