import React, { useState } from "react";
import './Login.css';
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
function Login({ setLoginModel }) {
  // State to store login form fields: username and password
  const [LoginField, setLoginField] = useState({ userName: "", password: "" });

  // State to control loading spinner visibility
  const [loader, setLoader] = useState(false);

  console.log(LoginField);

  // Handles input changes for username and password fields
  const handleChange = (event, name) => {
    setLoginField({
      ...LoginField,
      [name]: event.target.value,
    });
  };

  // Handles the login button click
  // Sends login request to backend API with username and password
  const handleLogin = async () => {
    setLoader(true); // show loading spinner
    axios
      .post("http://localhost:5000/api/login", LoginField, { withCredentials: true })
      .then((resp) => {
        setLoader(false); // hide loading spinner
        // Store the token and user info in localStorage
        localStorage.setItem("token", resp.data.token);
        localStorage.setItem("userId", resp.data.user._id);
        localStorage.setItem("userProfilePic", resp.data.user.profilePic);
        // Reload page after successful login
        window.location.reload();
      })
      .catch((err) => {
        setLoader(false); // hide loading spinner
        toast.error("Invalid credentials"); // show error toast
        console.log(err);
      });
  };
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
            <input className="username" type="text" onChange={(e) => handleChange(e, "userName")} value={LoginField.userName} placeholder="User Name" />
          </div>
          <div className="pass">
            <input type="password" onChange={(e) => handleChange(e, "password")} value={LoginField.password} placeholder="Password" className="Upass" />
          </div>
        </div>

        <div className="login_button">
          <div className="login_btn" onClick={handleLogin}>Login</div>
          <Link to={'/SignUp'} onClick={() => setLoginModel()} className="login_btn">Sign Up</Link>
          <div className="login_btn" onClick={() => setLoginModel()}>Cancel</div>
        </div>
        {loader && <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>}
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
