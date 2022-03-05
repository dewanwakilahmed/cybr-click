import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { createOrUpdateProfile } from "../redux";

import Alert from "./Alert";

const CreateOrUpdateProfile = ({ profile, createOrUpdateProfile }) => {
  const profileExists = profile === null ? false : true;

  const [formData, setFormData] = useState({
    name: profileExists ? profile.name : "",
    dateOfBirth: profileExists ? profile.dateOfBirth.split("T")[0] : "",
    gender: profileExists ? profile.gender : "",
    country: profileExists ? profile.location.country : "",
    stateOrProvince: profileExists ? profile.location.stateOrProvince : "",
    city: profileExists ? profile.location.city : "",
    profession: profileExists ? profile.profession : "",
    hobbiesAndInterests: profileExists ? profile.hobbiesAndInterests : "",
    facebook: profileExists ? profile.social.facebook : "",
    instagram: profileExists ? profile.social.instagram : "",
    twitter: profileExists ? profile.social.twitter : "",
    youtube: profileExists ? profile.social.youtube : "",
    linkedin: profileExists ? profile.social.linkedin : "",
    pinterest: profileExists ? profile.social.pinterest : "",
    website: profileExists ? profile.social.website : "",
  });

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
  } = formData;

  const changeHandler = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const submitHandler = async (e) => {
    e.preventDefault();
    createOrUpdateProfile(formData);
  };

  const gendersList = ["Male", "Female", "Non-Binary", "Prefer Not To Say"];

  return (
    <form
      className="create-update-profile-form"
      onSubmit={(e) => submitHandler(e)}
    >
      <div className="form-row">
        <div className="form-col">
          <div className="form-control">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              placeholder="John Doe"
              onChange={(e) => changeHandler(e)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="dateOfBirth">Date Of Birth *</label>
            <input
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              value={dateOfBirth}
              onChange={(e) => changeHandler(e)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              id="gender"
              value={gender}
              onChange={(e) => changeHandler(e)}
            >
              {gendersList.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="profession">Profession</label>
            <input
              type="text"
              name="profession"
              id="profession"
              value={profession}
              placeholder="Writer"
              onChange={(e) => changeHandler(e)}
            />
          </div>
        </div>
        <div className="form-col">
          <div className="form-control">
            <label htmlFor="country">Country *</label>
            <input
              type="text"
              name="country"
              id="country"
              value={country}
              placeholder="United States"
              onChange={(e) => changeHandler(e)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="stateOrProvince">State/Province</label>
            <input
              type="text"
              name="stateOrProvince"
              id="stateOrProvince"
              value={stateOrProvince}
              placeholder="New York"
              onChange={(e) => changeHandler(e)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              id="city"
              value={city}
              placeholder="New York"
              onChange={(e) => changeHandler(e)}
            />
          </div>
        </div>
      </div>
      <div className="form-row hobbies-and-interests-row">
        <div className="form-control">
          <label htmlFor="hobbiesAndInterests">Hobbies/Interests</label>
          <input
            type="text"
            name="hobbiesAndInterests"
            id="hobbiesAndInterests"
            value={hobbiesAndInterests}
            placeholder="Listening to Music, Walking"
            onChange={(e) => changeHandler(e)}
            className="hobbies-and-interests-input"
          />
        </div>
      </div>
      <div className="form-row social-row">
        <div className="form-row-row">
          <div className="form-col">
            <div className="form-control">
              <label htmlFor="facebook">Facebook URL</label>
              <input
                type="text"
                name="facebook"
                id="facebook"
                value={facebook}
                placeholder="facebook.com/johndoe"
                onChange={(e) => changeHandler(e)}
              />
            </div>
            <div className="form-control">
              <label htmlFor="instagram">Instagram URL</label>
              <input
                type="text"
                name="instagram"
                id="instagram"
                value={instagram}
                placeholder="instagram.com/johndoe/"
                onChange={(e) => changeHandler(e)}
              />
            </div>
            <div className="form-control">
              <label htmlFor="twitter">Twitter URL</label>
              <input
                type="text"
                name="twitter"
                id="twitter"
                value={twitter}
                placeholder="twitter.com/johndoe"
                onChange={(e) => changeHandler(e)}
              />
            </div>
          </div>
          <div className="form-col">
            <div className="form-control">
              <label htmlFor="youtube">Youtube Channel URL</label>
              <input
                type="text"
                name="youtube"
                id="youtube"
                value={youtube}
                placeholder="youtube.com/c/JohnDoe"
                onChange={(e) => changeHandler(e)}
              />
            </div>
            <div className="form-control">
              <label htmlFor="linkedin">LinkedIn URL</label>
              <input
                type="text"
                name="linkedin"
                id="linkedin"
                value={linkedin}
                placeholder="linkedin.com/in/johndoe/"
                onChange={(e) => changeHandler(e)}
              />
            </div>
            <div className="form-control">
              <label htmlFor="pinterest">Pinterest URL</label>
              <input
                type="text"
                name="pinterest"
                id="pinterest"
                value={pinterest}
                placeholder="pinterest.com/johndoe/"
                onChange={(e) => changeHandler(e)}
              />
            </div>
          </div>
        </div>
        <div className="form-row-row">
          <div className="form-control personal-site">
            <label htmlFor="website">Personal Site URL</label>
            <input
              type="text"
              name="website"
              id="website"
              value={website}
              placeholder="www.johndoe.com"
              onChange={(e) => changeHandler(e)}
            />
          </div>
        </div>
      </div>

      <div className="form-row action-row">
        <Link to="/dashboard/my-profile" className="btn btn-black">
          Go Back
        </Link>
        <input
          type="submit"
          value={profileExists ? "Update Profile" : "Create Profile"}
          className="btn btn-orange btn-form-submit"
        />
      </div>
      <Alert />
    </form>
  );
};

CreateOrUpdateProfile.propTypes = {
  profile: PropTypes.object,
  createOrUpdateProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.auth.profile,
});

export default connect(mapStateToProps, { createOrUpdateProfile })(
  CreateOrUpdateProfile
);
