const express = require("express");
const router = express.Router();

// @route    GET api/user
// @desc     User Test Route
// @access   Public
router.get("/", (req, res) =>
  res.send("User Test Route reached successfully!")
);

module.exports = router;
