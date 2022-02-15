import { Link } from "react-router-dom";

import Button from "../components/Button";

// Icons
import MailIcon from "../assets/icons/mail-icon.svg";
import PasswordIcon from "../assets/icons/password-icon.svg";

const Register = () => {
  return (
    <form action="" className="home-form">
      <p className="form-type">Sign Up</p>
      <h1 className="greeting">Welcome</h1>
      <p className="msg-to-user">
        The platform for you to be creative. Don't miss the opportunity. Sign up
        now. It completely free!
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
      <div className="form-control">
        <label htmlFor="password2">Retype Password</label>
        <input
          type="password"
          placeholder="Enter your password again"
          name=""
          id="password2"
        />
        <img src={PasswordIcon} alt="password icon" />
      </div>
      <Button btnText="Continue" btnClass="btn-action" />
      <p className="change-form-type">
        Already have an account? &nbsp;
        <Link to="/" className="sign-up-link">
          Sign In
        </Link>
      </p>
    </form>
  );
};

export default Register;
