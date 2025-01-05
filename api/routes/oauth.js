const express = require("express");
const router = express.Router();
const { googleAuth } = require("../controllers/oAuthController");
const cookieParser = require("cookie-parser");

router.use(cookieParser());

router.get("/", googleAuth);

module.exports = router;
