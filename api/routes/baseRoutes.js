const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/registerUser.js");
const { loginUser } = require("../controllers/loginUser.js");
const cookieParser = require("cookie-parser");
router.use(cookieParser());

router.post("/register", registerUser);
router.post("/login", loginUser);
module.exports = router;
