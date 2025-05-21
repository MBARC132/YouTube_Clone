import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock login action
    alert(`Logged in as ${email}`);
  };

  return (
    <div className="youtube-login">
      <div className="login-box">
        <h2>Sign in</h2>
        <p>to continue to YouTube</p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email or phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        <div className="extra-links">
          <a href="#">Forgot email?</a>
          <a href="#">Create account</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
