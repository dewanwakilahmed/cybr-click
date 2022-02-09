const mongoose = require("mongoose");

const ProfileSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
  },
  location: {
    country: {
      type: String,
      required: true,
    },
    stateOrProvince: {
      type: String,
    },
    city: {
      type: String,
    },
  },
  profession: {
    type: String,
  },
  hobbiesAndInterests: [
    {
      type: String,
    },
  ],
  social: {
    facebook: {
      type: String,
    },
    instagram: {
      type: String,
    },
    twitter: {
      type: String,
    },
    youtube: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    pinterest: {
      type: String,
    },
    website: {
      type: String,
    },
  },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
