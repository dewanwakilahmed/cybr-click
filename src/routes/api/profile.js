const express = require("express");
const { check, validationResult } = require("express-validator");

// Middlewares
const authMiddleware = require("../../middlewares/auth");

// Models
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
      check("name", "Name is required!").not().isEmpty(),
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
      name,
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
    if (name) profileFields.name = name;
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
      let profileWithInputUserName = await Profile.findOne({ name });
      let existingProfile = await Profile.findOne({ user: req.user.id });

      // Check if Username is already taken
      if (profileWithInputUserName && existingProfile) {
        if (existingProfile.name !== name) {
          return res.status(400).json({
            msg: "Name already taken. Please use a different name!",
          });
        }
      } else if (profileWithInputUserName && !existingProfile) {
        return res.status(400).json({
          msg: "Name already taken. Please use a different name!",
        });
      }

      // Update Profile if it already exists
      if (existingProfile) {
        existingProfile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );

        console.log("Profile Updated Successfully!");
        return res.json(existingProfile);
      }

      // Create Profile if it doesn't already exist
      let newProfile = new Profile(profileFields);
      await newProfile.save();
      console.log("Profile Created Successfully!");
      res.json(newProfile);
    } catch (err) {
      console.error(err.message);
      res
        .status(500)
        .json({ msg: "Create/Update Profile Unsuccessful. Server Error!" });
    }
  }
);

// @route    GET api/profile/me
// @desc     Fetch Authenticated/LoggedIn User Profile
// @access   Private
router.get("/me", authMiddleware, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      "user",
      ["name", "avatar"]
    );

    // If Profile doesn't exist yet
    if (!profile) {
      return res.status(400).json({ msg: "Profile doesn't exist yet!" });
    }

    console.log("Fetched Own Profile Sucessfully!");
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Fetch Profile Unsuccessful. Server Error!" });
  }
});

// @route    GET api/profile/all
// @desc     Fetch All Profiles
// @access   Public
router.get("/all", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", [
      "name",
      "avatar",
      "dateOfRegistration",
    ]);
    console.log("Fetched All Profiles Sucessfully!");
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res
      .status(500)
      .json({ msg: "Fetch All Profiles Unsuccessful. Server Error!" });
  }
});

// @route    GET api/profile/user/:user_id
// @desc     Fetch Specific Profile by User ID
// @access   Public
router.get("/user/:user_id", async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate("user", ["name", "avatar", "dateOfRegistration"]);

    // If Profile doesn't exist
    if (!profile) {
      return res.status(400).json({ msg: "Profile Not Found!" });
    }

    console.log("Fetched Specific Profile Sucessfully!");
    res.json(profile);
  } catch (err) {
    if (err.kind === "ObjectId") {
      res
        .status(500)
        .json({ msg: "Fetch Profile Unsuccessful. Server Error!" });
    }
    console.error(err.message);
  }
});

module.exports = router;
