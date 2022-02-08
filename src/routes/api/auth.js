const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const authMiddleware = require("../../middlewares/auth");

const User = require("../../models/User");

const router = express.Router();

const jwtSecret = config.get("jwtSecret");

// @route    GET api/auth
// @desc     Verify Authentication Token
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

// @route    POST api/auth
// @desc     Login/Authenticate User
// @access   Public
router.post(
  "/",
  [
    check("email", "Valid Email is required!").isEmail(),
    check("password", "Password is required!").exists(),
  ],
  async (req, res) => {
    // Validation Check
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // Check if User exists
      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials!" }] });
      }

      // Verify Password
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        console.log("User Authentication Successful!");
      } else {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials!" }] });
      }

      // Return JWT
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(payload, jwtSecret, { expiresIn: 36000 }, (err, token) => {
        if (err) throw err;
        console.log(`Token: ${token}`);
        res.json({ token });
      });
    } catch (err) {
      console.error(err.message);
      res
        .status(500)
        .json({ msg: "User Authentication Failed. Server Error!" });
    }
  }
);

module.exports = router;
