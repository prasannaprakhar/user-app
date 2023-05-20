const { Authentication } = require("../db");
const jwt = require("jsonwebtoken");
const config = require("config");

const JWT_SECRET = config.get("JWT_SECRET");

//User Registration
const registerNewUser = async (req, res) => {
  const { username, email, password } = req.body;

  // Check if the username is already taken
  // const sameUserName = await Authentication.find({ username: username });
  // if (sameUserName) {
  //   res.status(500).json({ message: "Username Exists" });
  // }

  //   Hash the password
  //   const hashedPassword = bcrypt.hash(password, 10);

  try {
    // Save the user to the "database"
    const newUser = await Authentication.create({
      username,
      email,
      password,
    });
    res.status(200).json({ message: "User registered successfully !!" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

//Login the user
const userLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the user exists
    const user = await Authentication.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Check if the password is correct
    // const passwordMatch = await bcrypt.compare(password, user.password);
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid username or password" });
    } else {
      const token = jwt.sign(
        {
          username: user.username,
          //   exp: Math.floor(Date.now() / 1000),
        },
        JWT_SECRET
      );
      res.status(200).json({ token });
    }

    // Generate and send the JWT token
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  registerNewUser,
  userLogin,
};
