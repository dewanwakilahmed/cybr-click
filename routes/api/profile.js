const express = require("express");

const router = express.Router();

// @route    GET api/profile
// @desc     Profile Test Route
// @access   Public
router.get("/", (req, res) =>
  res.send("Profile Test Route reached successfully!")
);

module.exports = router;
