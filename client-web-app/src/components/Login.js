// Icons
import MailIcon from "../assets/icons/mail-icon.svg";
import PasswordIcon from "../assets/icons/password-icon.svg";

const Login = () => {
  return (
    <form action="" className="login-form">
      <p className="sign-in-msg">Sign In</p>
      <h1 className="welcome">Welcome Back</h1>
      <p className="sign-in-instructions">
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
      <div className="extra-action-wrapper">
        <div>
          <input type="checkbox" name="" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <p className="forgot-password">Forgot Password</p>
      </div>
      <button className="btn btn-action">Continue</button>
      <p className="sign-up-instruction">
        Don't have an account? <span>Sign Up</span>
      </p>
    </form>
  );
};

export default Login;
