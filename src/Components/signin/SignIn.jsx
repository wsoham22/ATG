import React from 'react';
import './signin.css';

const SignIn = ({ switchToSignUp, onSignIn }) => {
  return (
    <div>
      <div className="signup-container">
        <header className="header">
          <div className="label">
          <h1>
              Not signed up yet? <span><a href='#' onClick={switchToSignUp}>Create new for free</a></span>
            </h1>
          </div>
        </header>
        <div className="form-container">
          {/* <h2 id="createac">Create Account</h2> */}
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <div className="password-input">
              <input type="password" id="password" />
              <i className="fas fa-eye"></i>
            </div>
          </div>
          <button className="signinbtn" onClick={onSignIn}>Sign In</button>
        </div>

        <div className="social-login-container">
          <div className="social-login-box">
            <i className="fab fa-facebook-f"></i>
            <span>Sign in with Facebook</span>
          </div>
          <div className="social-login-box">
            <i className="fab fa-google-f"></i>
            <span>Sign in with Google</span>
          </div>
        </div>
        <div className="signin-link">Forgot password?</div>
        <div className="terms-and-conditions">
          By signing up, you agree to our terms and conditions, Privacy policy.
        </div>
      </div>
    </div>
  );
};

export default SignIn;
