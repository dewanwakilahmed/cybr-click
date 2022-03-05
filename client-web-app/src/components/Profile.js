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

  return (
    <div className="profile">
      <div className="profile-header">
        <div className="user-summary">
          <img
            src={UserImage}
            alt="user profile"
            className="user-profile-picture"
          />
          <h2 className="user-name">Dewan Wakil Ahmed</h2>
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
                <tr className="profile-items">
                  <td className="profile-item-title">Gender</td>
                  <td className="profile-item-value">Male</td>
                </tr>
                <tr className="profile-items">
                  <td className="profile-item-title">Age</td>
                  <td className="profile-item-value">24 yrs</td>
                </tr>
                <tr className="profile-items">
                  <td className="profile-item-title">Profession</td>
                  <td className="profile-item-value">Full Stack Developer</td>
                </tr>
              </table>
              <table className="profile-details-col">
                <tr className="profile-items">
                  <td className="profile-item-title">City</td>
                  <td className="profile-item-value">Dhaka</td>
                </tr>
                <tr className="profile-items">
                  <td className="profile-item-title">State/Province</td>
                  <td className="profile-item-value">Bangladesh</td>
                </tr>
                <tr className="profile-items">
                  <td className="profile-item-title">Country</td>
                  <td className="profile-item-value">Bangladesh</td>
                </tr>
              </table>
            </div>
            <div className="profile-details-row hobbies-interests">
              <p className="tag">Listening to Music</p>
              <p className="tag">Walking</p>
              <p className="tag">Reading</p>
              <p className="tag">Sea</p>
              <p className="tag">Build</p>
              <p className="tag">Play</p>
              <p className="tag">Coffee</p>
              <p className="tag">Tea</p>
              <p className="tag">Cigarette</p>
            </div>
            <div className="profile-details-row social-links">
              <a href="facebook.com">
                <CgWebsite />
              </a>
              <a href="facebook.com">
                <GrFacebookOption />
              </a>
              <a href="instagram.com">
                <RiInstagramLine />
              </a>
              <a href="facebook.com">
                <FaTwitter />
              </a>
              <a href="facebook.com">
                <FiYoutube />
              </a>
              <a href="facebook.com">
                <FaLinkedinIn />
              </a>
              <a href="facebook.com">
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
