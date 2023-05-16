const express = require("express");
const router = express.Router();

// Import the user controller
const {
  getAllUsers,
  createNewUser,
  deleteUserById,
} = require("../controllers/userController");

// Define the routes and use the controller functions
router.get("/user/get-all-users", getAllUsers);
router.post("/user/create-user", createNewUser);
router.delete("/user/delete-user/:id", deleteUserById);

module.exports = router;
