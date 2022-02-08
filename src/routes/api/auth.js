const express = require("express");

const authMiddleware = require("../../middlewares/auth");

const User = require("../../models/User");

const router = express.Router();

// @route    GET api/auth
// @desc     Authentication Token Verification
// @access   Public
router.get("/", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res
      .status(500)
      .json({ msg: "Authentication Token Verification Failed. Server Error!" });
  }
});

module.exports = router;
