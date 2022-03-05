import { useState } from "react";
import PropTypes from "prop-types";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";

import { loginUser } from "../redux";

import Alert from "./Alert";

// Icons
import MailIcon from "../assets/icons/mail-icon.svg";
import PasswordIcon from "../assets/icons/password-icon.svg";

const Login = ({ isAuthenticated, loginUser }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    loginUser(email, password);
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <form className="home-form" onSubmit={(e) => submitHandler(e)}>
      <p className="form-type">Sign In</p>
      <h1 className="greeting">Welcome Back</h1>
      <p className="msg-to-user">Sign in with your email and password.</p>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Enter your email"
          name="email"
          value={email}
          onChange={(e) => changeHandler(e)}
          id="email"
          required
        />
        <img src={MailIcon} alt="mail icon" />
      </div>
      <div className="form-control">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          value={password}
          onChange={(e) => changeHandler(e)}
          required
          id="password"
        />
        <img src={PasswordIcon} alt="password icon" />
      </div>
      <div className="extra-actions-wrapper">
        <div className="remember-me-wrapper">
          <input type="checkbox" name="" id="remember-me" />
          <label htmlFor="remember-me"> Remember me</label>
        </div>
        <p className="forgot-password">Forgot Password</p>
      </div>
      <input type="submit" value="Continue" className="btn btn-orange" />
      <p className="change-form-type">
        Don't have an account? &nbsp;
        <Link to="/register" className="sign-up-link">
          Sign Up
        </Link>
      </p>
      <Alert />
    </form>
  );
};

Login.propTypes = {
  isAuthenticated: PropTypes.bool,
  loginUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { loginUser })(Login);
