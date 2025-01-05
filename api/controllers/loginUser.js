const user = require("../models/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const User = await user.findOne({ username });
    console.log("Inside user login");
    if (!User) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
    const isValidPassword = await bcrypt.compare(password, User.password);
    if (!isValidPassword) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
    //creates a token with parameters provided by the user
    const token = jwt.sign(
      { id: User._id, username: User.username },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.cookie("jwt_token", token, {
      httpOnly: true, // Makes the cookie inaccessible to JavaScript (helps with XSS protection)
      secure: false, // Set to true in production for HTTPS
      maxAge: 3600000, // 1 hour expiry for the token
      sameSite: "Strict", // Helps with CSRF protection
    });
    console.log("Stored the cookie");
    res.status(200).json({ message: "Succesful Register", token });
  } catch (err) {
    logger.error("Error occurred on the server side", err);
    res.status(500).json({ message: "Error" });
  }
};
