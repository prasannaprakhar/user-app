const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    dob: {
      type: String,
      required: false,
    },
    phnnum: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = userSchema;
