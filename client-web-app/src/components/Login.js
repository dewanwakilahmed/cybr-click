import { Link } from "react-router-dom";

import Button from "../components/Button";

// Icons
import MailIcon from "../assets/icons/mail-icon.svg";
import PasswordIcon from "../assets/icons/password-icon.svg";

const Login = () => {
  return (
    <form action="" className="home-form">
      <p className="form-type">Sign In</p>
      <h1 className="greeting">Welcome Back</h1>
      <p className="msg-to-user">
        Sign in with your email and password or continue with social media
      </p>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input type="text" placeholder="Enter your email" name="" id="email" />
        <img src={MailIcon} alt="mail icon" />
      </div>
      <div className="form-control">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          name=""
          id="password"
        />
        <img src={PasswordIcon} alt="password icon" />
      </div>
      <div className="extra-actions-wrapper">
        <div className="remember-me-wrapper">
          <input type="checkbox" name="" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <p className="forgot-password">Forgot Password</p>
      </div>
      <Button btnText="Continue" btnClass="btn-action" />
      <p className="change-form-type">
        Don't have an account? &nbsp;
        <Link to="/register" className="sign-up-link">
          Sign Up
        </Link>
      </p>
    </form>
  );
};

export default Login;
