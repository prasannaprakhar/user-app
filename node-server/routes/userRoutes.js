const express = require("express");
const router = express.Router();
const { authenticateToken } = require("../middlewares/authenticateToken");

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
router.get("/get-all-users", authenticateToken, getAllUsers);
router.post("/create-user", authenticateToken, createNewUser);
router.delete("/delete-user/:id", authenticateToken, deleteUserById);
router.put("/update-user/:id", authenticateToken, updateUserById);
router.get("/search-users", authenticateToken, searchUsers);
router.get("/sort-users", authenticateToken, sortUsers);

module.exports = router;
