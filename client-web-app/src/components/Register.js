import { useState } from "react";
import PropTypes from "prop-types";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";

import { setAlert, registerUser } from "../redux";

import Alert from "./Alert";

// Icons
import MailIcon from "../assets/icons/mail-icon.svg";
import PasswordIcon from "../assets/icons/password-icon.svg";

const Register = ({ isAuthenticated, setAlert, registerUser }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const { email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password === password2) {
      registerUser(email, password);
    } else {
      setAlert("Passwords do not match!", "error", 3000);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <form className="home-form" onSubmit={(e) => onSubmit(e)}>
      <p className="form-type">Sign Up</p>
      <h1 className="greeting">Welcome</h1>
      <p className="msg-to-user">
        The platform for you to be creative. Don't miss the opportunity. Sign up
        now. It's completely free!
      </p>
      <div className="form-control">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Enter your email"
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
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
          onChange={(e) => onChange(e)}
          minLength="8"
          required
          id="password"
        />
        <img src={PasswordIcon} alt="password icon" />
      </div>
      <div className="form-control">
        <label htmlFor="password2">Retype Password</label>
        <input
          type="password"
          placeholder="Enter your password again"
          name="password2"
          value={password2}
          onChange={(e) => onChange(e)}
          minLength="8"
          required
          id="password2"
        />
        <img src={PasswordIcon} alt="password icon" />
      </div>
      <input type="submit" value="Continue" className="btn btn-action" />
      <p className="change-form-type">
        Already have an account? &nbsp;
        <Link to="/login" className="sign-up-link">
          Sign In
        </Link>
      </p>
      <Alert />
    </form>
  );
};

Register.propTypes = {
  isAuthenticated: PropTypes.bool,
  setAlert: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, registerUser })(Register);
