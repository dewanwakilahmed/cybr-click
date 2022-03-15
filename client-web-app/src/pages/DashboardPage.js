import { useState } from "react";
import PropTypes from "prop-types";
import { Outlet, NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";

import { logoutUser } from "../redux";

// Logo
import CybrClickLogo from "../assets/logos/cybr-click-logo.svg";

// Icons
import { FiSearch } from "react-icons/fi";
import { RiLogoutBoxRFill, RiInstagramFill } from "react-icons/ri";
import { AiFillHome, AiFillVideoCamera } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiHelpCircle } from "react-icons/bi";
import {
  FaBloggerB,
  FaBook,
  FaUserCircle,
  FaFacebookSquare,
  FaTwitterSquare,
} from "react-icons/fa";

// Images
import UserImage from "../assets/images/user-image-sample.jpg";

const DashboardPage = ({ logoutUser }) => {
  const [tabTitle, setTabTitle] = useState("Home");

  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <div className="cybr-click-logo-container">
          <Link to="/dashboard">
            <img
              src={CybrClickLogo}
              alt="cybr click logo"
              className="cybr-click-logo"
            />
          </Link>
        </div>
        <div className="tab-info-and-utilities">
          <h1 className="current-tab-title">{tabTitle}</h1>
          <div className="search-bar">
            <FiSearch size="1rem" />
            <input type="text" placeholder="Search" className="search-input" />
          </div>
          <div className="user-utilities">
            <IoMdNotificationsOutline className="notification-icon" />
            <Link to="my-profile">
              <img src={UserImage} alt="User Profile" className="user-image" />
            </Link>
          </div>
        </div>
      </header>
      <main className="dashboard-main">
        <div className="dashboard-nav">
          <nav className="nav">
            <NavLink
              to="home"
              onClick={() => setTabTitle("Home")}
              className="nav-tab"
            >
              <AiFillHome className="nav-tab-icon" />
              <span className="nav-tab-title">Home</span>
            </NavLink>
            <NavLink
              to="blogs"
              onClick={() => setTabTitle("Blogs")}
              className="nav-tab"
            >
              <FaBloggerB className="nav-tab-icon" />
              <span className="nav-tab-title">Blogs</span>
            </NavLink>
            <NavLink
              to="videos"
              onClick={() => setTabTitle("Videos")}
              className="nav-tab"
            >
              <AiFillVideoCamera className="nav-tab-icon" />
              <span className="nav-tab-title">Videos</span>
            </NavLink>
            <NavLink
              to="ebooks"
              onClick={() => setTabTitle("Ebooks")}
              className="nav-tab"
            >
              <FaBook className="nav-tab-icon" />
              <span className="nav-tab-title">Ebooks</span>
            </NavLink>
            <NavLink
              to="my-profile"
              onClick={() => setTabTitle("My Profile")}
              className="nav-tab"
            >
              <FaUserCircle className="nav-tab-icon" />
              <span className="nav-tab-title">My Profile</span>
            </NavLink>
            <NavLink to="/" className="nav-tab" onClick={logoutUser}>
              <RiLogoutBoxRFill className="nav-tab-icon" />
              <span className="nav-tab-title">Sign Out</span>
            </NavLink>
          </nav>
          <div className="help">
            <BiHelpCircle className="help-icon" />
            <span className="help-title">Help</span>
          </div>
        </div>
        <div className="dashboard-content">
          <Outlet />
        </div>
      </main>
      <footer className="dashboard-footer">
        <p className="privacy-policy">Privacy Policy</p>
        <div className="platform-info">
          {/* <h4 className="platform-moto">Platform from creator to creator</h4> */}
          <p className="copyright">Copyright © 2022 - Cybrclick.com</p>
        </div>
        <div className="platform-social-links">
          <p>Find us on:</p>
          <a href="www.facebook.com" target="_blank">
            <FaFacebookSquare className="platform-social-links-icons" />
          </a>
          <a href="www.instagram.com" target="_blank">
            <RiInstagramFill className="platform-social-links-icons" />
          </a>
          <a href="www.twitter.com" target="_blank">
            <FaTwitterSquare className="platform-social-links-icons" />
          </a>
        </div>
      </footer>
    </div>
  );
};

DashboardPage.propTypes = {
  logoutUser: PropTypes.func.isRequired,
};

export default connect(null, { logoutUser })(DashboardPage);
