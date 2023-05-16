const { User } = require("../db");

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
    const newUser = await User.create(req.body);
    res
      .status(200)
      .json({ user: newUser, message: "User created successfully !!" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

//delete existing user
const deleteUserById = async (req, res) => {
  try {
    const deletedUser = await User.findOneAndDelete({ _id: req.params.id });
    res.json({ user: deletedUser, message: "User deleted successfully !!" });
  } catch {
    res.status(400).json({ message: error.message });
  }
};

//update existing user
const updateUserById = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body);
    res
      .status(200)
      .json({ user: updatedUser, message: "User updated successfully !!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//search based on search Term
const searchUsers = async (req, res) => {
  try {
    const searchQuery = req.query.search;
    const regex = new RegExp(searchQuery, "i"); // Create a case-insensitive regular expression

    const matchedUsers = await User.find({
      name: { $regex: regex },
    });

    res.status(200).json(matchedUsers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllUsers,
  createNewUser,
  deleteUserById,
  updateUserById,
  searchUsers,
};
