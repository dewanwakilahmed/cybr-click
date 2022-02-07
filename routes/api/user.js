const express = require("express");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const User = require("../../models/User");

const router = express.Router();

const jwtSecret = config.get("jwtSecret");

// @route    POST api/user/register
// @desc     Register User
// @access   Public
router.post(
  "/register",
  [
    check("name", "Name is required!").not().isEmpty(),
    check("email", "Valid Email is required!").isEmail(),
    check(
      "password",
      "Password should contain at least 8 characters!"
    ).isLength({ min: 8 }),
  ],
  async (req, res) => {
    // Validation Check
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // Check if User already exists
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ msg: "Email already taken! Please use a different email." });
      }

      // Fetch User's Gravatar from Email
      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      });

      // Create New User Instance
      user = new User({ name, email, password, avatar });

      // Encrypt Password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // Save New User
      await user.save();
      console.log("New User created successfully!");

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
        .json({ msg: "User Registration Unsuccessful! Server Error!" });
    }
  }
);

module.exports = router;
