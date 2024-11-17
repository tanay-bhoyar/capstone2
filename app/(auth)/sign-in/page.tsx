import React from 'react';
const Login = () => {
  return (
    <div className="login-container">
      <div className="image-container">
        <img
          src="/icons/uni.png"
          alt="VIT-AP University"
          width={100}
          height={100}
          className="university-image"
        />
        <h1>Welcome to Careers of VIT-AP University</h1>
        <p>Where talent meets endless possibilities</p>
      </div>
      <div className="form-container2">
        <div className="login-box">
          <img
            src="data:image/png;base64,..."
            alt="Login Icon"
            className="login-icon"
          />
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="Enter your username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
