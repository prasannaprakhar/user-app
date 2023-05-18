const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoutes = require("./routes/userRoutes");
const authenticationRoutes = require("./routes/authenticationRoutes");
const config = require("config");

const port = config.get("PORT");

// defining the Express app
const app = express();

// * middlewares * //
// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan("combined"));

// * routes * //
app.use("/user", userRoutes);
app.use("/", authenticationRoutes);

//starting the server
app.listen(port, () => {
  console.log("Server started on port: " + port);
});
