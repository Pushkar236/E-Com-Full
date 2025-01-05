const user = require("../models/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.registerUser = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const isUserExisting = await user.findOne({ username });
    if (isUserExisting) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10); //2nd argument decides the number of cycles
    const User = new user({
      username,
      password: hashedPassword,
      email,
    });
    await User.save();

    const token = jwt.sign(
      { id: User._id, username: User.username, email: User.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h", //time upto which the token is valid
      }
    );
    res.cookie("jwt_token", token, {
      httpOnly: true, // Makes the cookie inaccessible to JavaScript (helps with XSS protection)
      secure: false, // Set to true in production for HTTPS
      maxAge: 3600000, // 1 hour expiry for the token
      sameSite: "Strict", // Helps with CSRF protection
    });
    res.status(200).json({ message: "Succesful Register", token });
  } catch (err) {
    logger.error("Error occurred on the server side", err);
    res.status(500).json({ message: "Error" });
  }
};
