const express = require("express");
const router = express.Router();
const { controlRequest } = require("../controllers/controlRequest");

router.post("/", controlRequest);

module.exports = router;
