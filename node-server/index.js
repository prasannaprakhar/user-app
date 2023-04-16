var express = require("express");
var app = express();

var cors = require("cors");

app.use(cors());

var port = 5000;

// var routes = require("./api/routes");

// routes(app);

app.get("/", (req, res) => {
  res.send("Linked with node server");
});

// server.listen(5000); //3 - listen for any incoming requests

console.log("Node.js web server at port 5000 is running..");

app.listen(port, () => {
  console.log("Server started on port: " + port);
});
