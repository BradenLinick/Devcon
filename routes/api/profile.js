const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// @route         GET api/profile/test
// @description   Tests profile route
// @access        Public
router.get("/test", (req, res) => res.json({ msg: "Profile works" }));

module.exports = router;
