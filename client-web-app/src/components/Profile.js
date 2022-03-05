import PropTypes from "prop-types";
import { Navigate, Link } from "react-router-dom";
import { connect } from "react-redux";

// Icons
import { CgWebsite } from "react-icons/cg";
import { GrFacebookOption } from "react-icons/gr";
import { RiInstagramLine } from "react-icons/ri";
import { FaTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

// Images
import UserImage from "../assets/images/user-image-sample.jpg";

const Profile = ({ profile }) => {
  if (profile === null) {
    return <Navigate to="create" />;
  }

  const {
    name,
    dateOfBirth,
    gender,
    location,
    profession,
    hobbiesAndInterests,
    social,
  } = profile;

  const dob = dateOfBirth.split("T")[0];

  const { country, stateOrProvince, city } = location;

  const {
    facebook,
    instagram,
    twitter,
    youtube,
    linkedin,
    pinterest,
    website,
  } = social;

  const hobbiesAndInterestsToTags =
    hobbiesAndInterests !== null &&
    hobbiesAndInterests.length > 0 &&
    hobbiesAndInterests.map((item) => (
      <p key={item} className="tag">
        {item}
      </p>
    ));

  return (
    <div className="profile">
      <div className="profile-header">
        <div className="user-summary">
          <img
            src={UserImage}
            alt="user profile"
            className="user-profile-picture"
          />
          <h2 className="user-name">{name}</h2>
          <button className="btn btn-black">Follow</button>
          <div className="profile-summary">
            <div className="summary-item">
              <p className="summary-item-title">Products</p>
              <p className="summary-item-number">28</p>
            </div>
            <div className="summary-item">
              <p className="summary-item-title">Followers</p>
              <p className="summary-item-number">643</p>
            </div>
            <div className="summary-item">
              <p className="summary-item-title">Following</p>
              <p className="summary-item-number">76</p>
            </div>
          </div>
        </div>
        <div className="about-me-container">
          <Link to="update" className="btn btn-orange btn-update-profile">
            Edit Profile
          </Link>
          <h2 className="about-me-title">About me</h2>
          <div className="profile-details general-info">
            <div className="profile-details-row first-row">
              <table className="profile-details-col">
                <tbody>
                  <tr className="profile-items">
                    <td className="profile-item-title">Gender</td>
                    <td className="profile-item-value">{gender}</td>
                  </tr>
                  <tr className="profile-items">
                    <td className="profile-item-title">Date Of Birth</td>
                    <td className="profile-item-value">{dob}</td>
                  </tr>
                  <tr className="profile-items">
                    <td className="profile-item-title">Profession</td>
                    <td className="profile-item-value">{profession}</td>
                  </tr>
                </tbody>
              </table>
              <table className="profile-details-col">
                <tbody>
                  <tr className="profile-items">
                    <td className="profile-item-title">City</td>
                    <td className="profile-item-value">{city}</td>
                  </tr>
                  <tr className="profile-items">
                    <td className="profile-item-title">State/Province</td>
                    <td className="profile-item-value">{stateOrProvince}</td>
                  </tr>
                  <tr className="profile-items">
                    <td className="profile-item-title">Country</td>
                    <td className="profile-item-value">{country}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="profile-details-row hobbies-interests">
              {hobbiesAndInterestsToTags}
            </div>
            <div className="profile-details-row social-links">
              <a href={website} target="_blank">
                <CgWebsite />
              </a>
              <a href={facebook} target="_blank">
                <GrFacebookOption />
              </a>
              <a href={instagram} target="_blank">
                <RiInstagramLine />
              </a>
              <a href={twitter} target="_blank">
                <FaTwitter />
              </a>
              <a href={youtube} target="_blank">
                <FiYoutube />
              </a>
              <a href={linkedin} target="_blank">
                <FaLinkedinIn />
              </a>
              <a href={pinterest} target="_blank">
                <FaPinterestP />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  profile: PropTypes.object,
};

const mapStateToProps = (state) => ({
  profile: state.auth.profile,
});

export default connect(mapStateToProps)(Profile);
