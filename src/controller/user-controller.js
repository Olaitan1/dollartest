const User = require('../model/user-model');

const saveData = async (req, res) =>
{
    const { fullName, sector } = req.body;

    const newUser = await User.create({
        fullName,
        sector
    })
    return res.status(201).json(
        {
            message: "User created successfully",
            user: newUser
        })
};

const getAllUsers = async (req, res) =>
{
    const users = await User.find()
    if (users)
    {
        res.status(200).json(
        users
    )
    }
    
};


const viewProfile = async (req, res) =>{
 try {
    const {userId} = req.params; 
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({ user });
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const editUserById = async (req, res) => {
  try {
    const {userId} = req.params; 
    const { fullName, sector } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update user properties
    user.fullName = fullName;
    user.sector = sector;

    
    await user.save();

    return res.status(200).json({
      message: 'User updated successfully',
      user,
    });
  } catch (error) {
    console.error('Error updating user by ID:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
module.exports = {
    saveData,
    viewProfile,
    getAllUsers,
    editUserById
}