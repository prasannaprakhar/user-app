const mongoose = require("mongoose");
const config = require("config");
const userSchema = require("./models/userModel");
const authenticationSchema = require("./models/authenticationModel");

const mongoDb = config.get("MONGO_DB_NAME");

// * connection with mongoDB database
mongoose
  .connect(
    `mongodb+srv://ppj:ppj@cluster0.cvnte.mongodb.net/${mongoDb}?retryWrites=true`
  )
  .then(() => {
    console.log(`Connected to MongoDB: ${mongoDb}`);
  })
  .catch((error) => {
    console.log("Failed to load DB: ", error);
  });

const User = mongoose.model("User", userSchema);
const Authentication = mongoose.model("Authentication", authenticationSchema);

module.exports = { User, Authentication };
