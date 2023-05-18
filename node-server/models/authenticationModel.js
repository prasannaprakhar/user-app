const mongoose = require("mongoose");

const authenticationSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false,
    },
    // confirm_password: {
    //   type: String,
    //   required: false,
    // },
  },
  {
    timestamps: true,
  }
);

module.exports = authenticationSchema;
