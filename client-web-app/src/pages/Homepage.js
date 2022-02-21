import { Outlet } from "react-router-dom";

// Logo
import CybrClickLogo from "../assets/logos/cybr-click-logo.svg";

// Images
import HomepageImage from "../assets/images/homepage-image.svg";

const HomePage = () => {
  return (
    <div className="homepage">
      <img
        src={CybrClickLogo}
        alt="cybr click logo"
        className="cybr-click-logo"
      />
      <div className="home-form-wrapper">
        <Outlet />
      </div>
      <div className="home-content">
        <img src={HomepageImage} alt="people working on digital products" />
      </div>
    </div>
  );
};

export default HomePage;
