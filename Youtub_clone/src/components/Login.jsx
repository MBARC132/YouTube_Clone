import React from "react";
import './Login.css';

function Login() {
  return (
    <div className="login_overlay">
      <div className="Login">
        <div className="login_card">
          {/* You can add a logo or image here if you want */}
        </div>
        <div className="Logintitle">
          Login
        </div>
        <div className="logincreden">
          <div className="Uname">
            <input className="username" type="text" placeholder="User Name" />
          </div>
          <div className="pass">
            <input type="password" placeholder="Password" className="Upass" />
          </div>
        </div>

        <div className="login_button">
          <div className="login_btn">Login</div>
          <div className="login_btn"><a href="">Sign Up</a></div>
          <div className="login_btn">Cancel</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
