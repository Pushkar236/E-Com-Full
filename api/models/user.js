const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  googleId: {
    type: String,
    unique: true, // Google Auth ID should be unique
  },
});

module.exports = mongoose.model("User", userSchema);
