const User = require("../models/userModel");

//get all users
const getAllUsers = async (_, res) => {
  const users = await User.find({});
  if (users) {
    res.status(200).json(users);
  } else {
    res.status(500).json({ message: "Cannot fetch records from DB !!" });
  }
};

//create new user
const createNewUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json({ message: "User created successfully !!", user });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

//delete existing user
const deleteUserById = async (req, res) => {
  const userId = req.params.id;
  const deletedUser = await User.findOneAndDelete({ _id: userId });
  res.json({ message: "User deleted successfully !!", deletedUser });
};

module.exports = {
  getAllUsers,
  createNewUser,
  deleteUserById,
};
