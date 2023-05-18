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
router.get("/get-all-users", getAllUsers);
router.post("/create-user", createNewUser);
router.delete("/delete-user/:id", deleteUserById);
router.put("/update-user/:id", updateUserById);
router.get("/search-users", searchUsers);
router.get("/sort-users", sortUsers);

module.exports = router;
