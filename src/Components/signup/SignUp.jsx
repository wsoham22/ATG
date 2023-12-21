// Corrected prop name: switchToSignIn
const SignUp = ({ switchToSignIn }) => {
    return (
      <div>
        <div className="signup-container">
          <header className="header">
            <div className="label">
              <h1>Lets learn, share and inspire with our passion for computer engineering. Sign up now 🤘🏻</h1>
            </div>
          </header>
          <div className="form-container">
            <div className="name-container">
              <div>
                <label htmlFor="firstName" id='firstName'>First Name:</label>
                <input type="text" id="firstName" />
              </div>
              <div>
                <label htmlFor="lastName" id='lastName'>Last Name:</label>
                <input type="text" id="lastName" />
              </div>
            </div>
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
            <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <div className="password-input">
                <input type="password" id="confirmPassword" />
                <i className="fas fa-eye"></i>
              </div>
            </div>
            <button className="create-account-btn">Create Account</button>
          </div>
  
          <div className="social-login-container">
            <div className="social-login-box">
              <i className="fab fa-facebook-f"></i>
              <span>Sign up with Facebook</span>
            </div>
            <div className="social-login-box">
              <i className="fab fa-google-f"></i>
              <span>Sign up with Google</span>
            </div>
          </div>
          <div className="signin-link">
            Already have an account? <a href="#" onClick={switchToSignIn}>Sign in</a>
          </div>
          <div className="terms-and-conditions">
            By signing up, you agree to our terms and conditions, Privacy policy.
          </div>
        </div>
      </div>
    );
  };
  
  export default SignUp;
  