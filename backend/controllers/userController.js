
const User=require('../models/userschema');

const get_user=async (req,res)=>{
    try {
        const userId = req.params.id;
       
        const user = await User.findById(userId).select('-password');
       

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
      
       
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }

}


const edit_user = async (req, res) => {
    const userid = req.params.id;
    const { username, contact } = req.body;

    try {
        const user = await User.findById(userid);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        user.username = username;
        user.contact = contact;
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Failed to update user' });
    }
};

module.exports = { edit_user };


module.exports={
    get_user,edit_user
}