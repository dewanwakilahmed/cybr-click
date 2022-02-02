const express = require("express");
const router = express.Router();

// @route    GET api/auth
// @desc     Auth Test Route
// @access   Public
router.get("/", (req, res) => res.send("Auth Test Route reached sucessfully!"));

module.exports = router;
