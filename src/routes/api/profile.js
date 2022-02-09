const express = require("express");
const { check, validationResult } = require("express-validator");

// Middlewares
const authMiddleware = require("../../middlewares/auth");

// Models
const User = require("../../models/User");
const Profile = require("../../models/Profile");

const router = express.Router();

// @route    POST api/profile
// @desc     Create/Update Profile
// @access   Private
router.post(
  "/",
  [
    authMiddleware,
    [
      check("dateOfBirth", "Date of Birth is required!").not().isEmpty(),
      check("country", "Country is required!").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    // Validation Check
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      dateOfBirth,
      gender,
      country,
      stateOrProvince,
      city,
      profession,
      hobbiesAndInterests,
      facebook,
      instagram,
      twitter,
      youtube,
      linkedin,
      pinterest,
      website,
    } = req.body;

    const profileFields = {};

    // Build Profile Object
    profileFields.user = req.user.id;
    if (dateOfBirth) profileFields.dateOfBirth = dateOfBirth;
    if (gender) profileFields.gender = gender;
    if (profession) profileFields.profession = profession;
    if (hobbiesAndInterests) {
      profileFields.hobbiesAndInterests = hobbiesAndInterests
        .split(",")
        .map((hobbyAndInterest) => hobbyAndInterest.trim());
    }

    // Build and Add Location Object
    profileFields.location = {};
    if (country) profileFields.location.country = country;
    if (stateOrProvince)
      profileFields.location.stateOrProvince = stateOrProvince;
    if (city) profileFields.location.city = city;

    // Build and Add Social Object
    profileFields.social = {};
    if (facebook) profileFields.social.facebook = facebook;
    if (instagram) profileFields.social.instagram = instagram;
    if (twitter) profileFields.social.twitter = twitter;
    if (youtube) profileFields.social.youtube = youtube;
    if (linkedin) profileFields.social.linkedin = linkedin;
    if (pinterest) profileFields.social.pinterest = pinterest;
    if (website) profileFields.social.website = website;

    try {
      let profile = await Profile.findOne({ user: req.user.id });

      // Update Profile if it already exists
      if (profile) {
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );

        console.log("Profile Updated Successfully!");
        return res.json(profile);
      }

      // Create Profile if it doesn't already exist
      profile = new Profile(profileFields);
      await profile.save();
      console.log("Profile Created Successfully!");
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res
        .status(500)
        .json({ msg: "Create/Update Profile Unsuccessful. Server Error!" });
    }
  }
);

module.exports = router;
