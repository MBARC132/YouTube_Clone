import React, { useState } from "react";
import './Login.css';
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
function Login({ setLoginModel }) {
  const [LoginField, setLoginField] = useState({ "userName": "", "password": "" })
  const [loader, setLoader] = useState(false);
  console.log(LoginField)
  const handleChange = (event, name) => {
    setLoginField({
      ...LoginField, [name]: event.target.value
    })
  }

  const handleLogin = async () => {
    setLoader(true);
    axios.post("http://localhost:5000/api/login", LoginField, {withCredentials:true}).then((resp) => {
      // console.log(resp)
      setLoader(false);
      localStorage.setItem("token", resp.data.token)
      localStorage.setItem("userId", resp.data.user._id)
      localStorage.setItem("userProfilePic", resp.data.user.profilePic)
      window.location.reload();
    }).catch((err) => {
      setLoader(false);
      toast.error("Invalid credentials")
      console.log(err)
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
