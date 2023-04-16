const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());

mongoose.connect("mongodb://localhost:27017/", {
  dbName: "userAppDb",
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const port = 5000;

app.post("/", (req, res) => {
  res.send([
    { name: "John", age: 30, car: null },
    { name: "Smith", age: 40, car: null },
  ]);
});

app.listen(port, () => {
  console.log("Server started on port: " + port);
});
