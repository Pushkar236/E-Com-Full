const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const user = require("./models/user.js");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const logger = require("./logger.js");
const cors = require("cors");
const authRouter = require("./routes/oauth.js");
const requestRouter = require("./routes/request.js");
const baseRoutes = require("./routes/baseRoutes.js");
const productRouter = require("./routes/productRoutes.js");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const cookieParser = require("cookie-parser");
const { authMiddleware } = require("./middlewares/authMiddleware.js");
dotenv.config();

const app = express();
//to parse json data
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend's URL
    credentials: true, // Allow cookies or authentication headers
  })
);
app.use(cookieParser());

app.use("/", baseRoutes);
app.use("/oauth", authRouter);
app.use("/request", requestRouter);
app.use("/products", productRouter);

//connect to mongo database
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connection Initiated");
}

app.post("/verifyToken", authMiddleware, async (req, res) => {
  if (req.cookies.id_token) {
    try {
      const userId = req.User.sub;
      const User = await user.findOne({ googleId: userId });
      if (!User) {
        return res.status(404).json({ message: "User not found" });
      }
      console.log("Sending the user to the front", User);
      res.status(200).json({ message: "Token is valid", User });
    } catch (err) {
      console.log("Verify error for google token", err);
      res.status(400).json({ message: "Error google" });
    }
  } else if (req.cookies.jwt_token) {
    try {
      const userId = req.User.id;
      const User = await user.findById(userId);
      if (!User) {
        return res.status(404).json({ message: "User not found" });
      }
      console.log("Sending the user to the front", User);
      res.status(200).json({ message: "Token is valid", User });
    } catch (err) {
      console.log("Verify error for jwt token", err);
      res.status(400).json({ message: "Error jwt" });
    }
  }
});

app.get("/user", authMiddleware, async (req, res) => {
  try {
    const userId = req.User.id;

    if (!userId) {
      return res.status(400).json({ message: "Please Login/Signup" });
    }

    const userData = await user.findById(userId).select("username"); // Fetch username and email
    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(userData);
  } catch (err) {
    logger.error("Error fetching user data", err);
    res.status(500).json({ message: "Error" });
  }
});

app.put("/edit", authMiddleware, async (req, res) => {
  try {
    const userId = req.User.id;
    const { username, password } = req.body;
    if (!userId) {
      logger.error("Auth error", err);
      return res.status(400).json({ message: "Please Login/Signup" });
    }
    const updatedFields = {};
    if (username) {
      updatedFields.username = username;
    }
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updatedFields.password = hashedPassword;
    }
    const updatedUser = await user.findByIdAndUpdate(userId, updatedFields, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(updatedUser);
  } catch (err) {
    logger.error("Error occurred on the server side", err);
    res.status(500).json({ message: "Error" });
  }
});

app.post("/logout", async (req, res) => {
  if (req.cookies.jwt_token) {
    res.clearCookie("jwt_token");
    console.log("Logged out");
    res.status(200).json({ message: "Logged out" });
  } else if (req.cookies.id_token) {
    res.clearCookie("id_token");
    console.log("Logged out");
    res.status(200).json({ message: "Logged out" });
  } else {
    res.status(400).json({ message: "You haven't logged in" });
  }
});

app.delete("/delete", authMiddleware, async (req, res) => {
  try {
    const userId = req.User.id;
    const deletedUser = await user.findByIdAndDelete(userId);
    res.status(200).json(deletedUser);
  } catch (err) {
    logger.error("Error occurred on the server side", err);

    res.status(500).json({ message: "Error" });
  }
});

app.listen("5000", () => {
  console.log("server is running on port 5000");
});
