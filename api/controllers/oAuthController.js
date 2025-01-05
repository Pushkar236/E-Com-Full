const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
const { OAuth2Client } = require("google-auth-library");
const user = require("../models/user");
const cookieParser = require("cookie-parser");

dotenv.config();
router.use(cookieParser());

const getUserData = async (access_token) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`
    );
    const data = await response.json();

    if (!data) {
      return res.status(400).json({ message: "Failed to fetch user data" });
    }

    let existingUser = await user.findOne({ email: data.email });

    if (!existingUser) {
      // If not, create a new user
      existingUser = new user({
        username: data.name, // You can choose to store the username as well
        email: data.email,
        password: "", // No password required
        googleId: data.sub, // Store the Google Auth ID
      });
      await existingUser.save();
      console.log("User was saved in the database");
    }

    console.log(data.email, data.name);
    return data;
  } catch (err) {
    console.log("Error while fetching user data", err);
  }
};

module.exports.googleAuth = async (req, res, next) => {
  const code = req.query.code;
  try {
    const redirectUrl = "http://localhost:5000/oauth";
    const oAuth2Client = new OAuth2Client(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      redirectUrl
    );
    const response = await oAuth2Client.getToken(code);
    await oAuth2Client.setCredentials(response.tokens);
    console.log("Tokens Acquired");
    const user = oAuth2Client.credentials;
    console.log(user);
    const userData = await getUserData(user.access_token);

    res.cookie("id_token", response.tokens.id_token, {
      httpOnly: true, // Makes the cookie inaccessible to JavaScript (helps with XSS protection)
      secure: process.env.NODE_ENV === "production", // Set to true in production for HTTPS
      maxAge: 3600000, // 1 hour expiry for the token
      sameSite: "Strict", // Helps with CSRF protection
    });
    res.redirect("http://localhost:5173");
  } catch (err) {
    console.log("Error while signing it with google", err);
  }
};
