const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
const User = require("./models/userModel");

const port = 5000;

// defining the Express app
const app = express();

// * middlewares * //

// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan("combined"));

app.use(bodyParser.urlencoded({ extended: false }));

// * connection with mongoDB database
mongoose
  .connect(
    "mongodb+srv://ppj:ppj@cluster0.cvnte.mongodb.net/user-db?retryWrites=true"
  )
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

// * routes * //

// create user api
app.post("/user/create-user", async (req, res) => {
  try {
    const product = await User.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
  res.send({ Message: "User created successfully !!" });
});

//starting the server
app.listen(port, () => {
  console.log("Server started on port: " + port);
});
