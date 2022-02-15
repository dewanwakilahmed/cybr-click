// Icons
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { BsEyeSlashFill } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";

// Logo
import CybrClickLogo from "../assets/logos/cybr-click-logo.svg";

const LoginPage = () => {
  return (
    <div className="login-page">
      <header className="login-header">
        <div className="login-header-content container">
          <img
            src={CybrClickLogo}
            alt="Cybr Click Logo"
            className="cybr-click-logo"
          />
          <h1 className="app-title">CYBR CLICK</h1>
          <button className="btn btn-action login-page-btn">Sign Up</button>
        </div>
      </header>
      <main className="login-main">
        <div className="login-main-content container">
          <div className="welcome-msg">
            <h2 className="welcome-title">
              Now Everyone Can Make A Living With Digital
            </h2>
            <h3 className="welcome-subtitle">
              The platform for you to be creative. Never miss the opportunity!
            </h3>
          </div>
          <div className="user-instructions">
            <p>Already a member? Login below.</p>
            <p>Not a member yet? Sign up now. It completely free!</p>
          </div>
          <div className="login-wrapper">
            <div className="login">
              <form action="" className="login-form">
                <div className="input-wrapper">
                  <input
                    type="text"
                    placeholder="Email"
                    className="text-input"
                  />
                  <HiOutlineMail size="1.25rem" className="input-icon" />
                </div>
                <div className="input-wrapper">
                  <input
                    type="password"
                    placeholder="Password"
                    className="text-input"
                  />
                  <BsEyeSlashFill size="1.25rem" className="input-icon" />
                </div>
                <div className="login-action">
                  <button className="btn btn-action login-page-btn">
                    <span>Login</span>
                    <BiLogIn size="1.25rem" />
                  </button>
                </div>
              </form>
              {/* <div className="divider">
                <p>/</p>
              </div> */}
              {/* <div className="login-external">
                <button className="btn btn-action login-page-btn">
                  <FcGoogle size="1.25rem" />
                  <span>Sign in with Google</span>
                </button>
              </div> */}
            </div>
            <div className="forgot-password">
              <p>Forgot Password?</p>
            </div>
          </div>
        </div>
      </main>
      <footer className="login-footer">
        <div className="login-footer-content container">
          <p className="privacy-policy">Privacy Policy</p>
          <p className="copyright">Copyright © 2022 - Cybrclick.com</p>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
