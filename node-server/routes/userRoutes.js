const express = require("express");
const router = express.Router();

// Import the user controller
const {
  getAllUsers,
  createNewUser,
  deleteUserById,
  updateUserById,
  searchUsers,
  sortUsers,
} = require("../controllers/userController");

// Define the routes and use the controller functions
router.get("/user/get-all-users", getAllUsers);
router.post("/user/create-user", createNewUser);
router.delete("/user/delete-user/:id", deleteUserById);
router.put("/user/update-user/:id", updateUserById);
router.get("/user/search-users", searchUsers);
router.get("/user/sort-users", sortUsers);

module.exports = router;
