import React from "react";

const Login = () => {
  return (
    <div className="login-root">
      <div className="login-card">
        <h2>Login</h2>
        <div className="login-input-form">
          <label>Username:</label>
          <input type="text" placeholder="Username" />
        </div>
        <div className="login-input-form">
          <label>Password:</label>
          <input type="password" placeholder="Password" />
        </div>
        <div className="login-submit">
          <input type="submit" value="Login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
