const express = require("express");
const router = express.Router();

// Import the user controller
const {
  registerNewUser,
  userLogin,
} = require("../controllers/authenticationController");

// Define the routes and use the controller functions
router.post("/register", registerNewUser);
router.post("/login", userLogin);

module.exports = router;
