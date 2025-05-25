import React, { useState } from "react";
import './Login.css';
import { Link } from "react-router-dom";

function Login({setLoginModel}) {
  const [LoginField, setLoginField] = useState({"userName":"", "password":""})
  console.log(LoginField)
  const handleChange = (event, name)=>{
    setLoginField({
      ...LoginField,[name]:event.target.value
    })
  }
  return (
    <div className="login_overlay">
      <div className="Login">
        <div className="login_card">
        </div>
        <div className="Logintitle">
          Login
        </div>
        <div className="logincreden">
          <div className="Uname">
            <input className="username" type="text" onChange={(e)=>handleChange(e,"userName")} value={LoginField.userName} placeholder="User Name" />
          </div>
          <div className="pass">
            <input type="password" onChange={(e)=>handleChange(e,"password")} value={LoginField.password} placeholder="Password" className="Upass" />
          </div>
        </div>

        <div className="login_button">
          <div className="login_btn">Login</div>
          <Link to={'/SignUp'} onClick={() => setLoginModel()} className="login_btn">Sign Up</Link>
          <div className="login_btn" onClick={() => setLoginModel()}>Cancel</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
