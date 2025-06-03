import React, { useState } from "react";
import './SignUp.css';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function SignUp() {
  // State to hold all the signup form input fields
  const [Signup, setSignUp] = useState({
    channelName: "",
    userName: "",
    password: "",
    about: "",
    profilePic: ""
  });

  // State to show progress loader during signup request
  const [progress, setProgress] = useState(false);

  // React Router navigate hook to redirect after signup success
  const navigate = useNavigate();

  // Handler to update form fields on user input
  const handleInput = (event, name) => {
    setSignUp({
      ...Signup,
      [name]: event.target.value
    });
  };

  // Handler to submit signup data to backend API
  const handleSignUp = async () => {
    setProgress(true); // show loader
    axios
      .post('http://localhost:5000/api/register', Signup)
      .then((response) => {
        console.log(response);
        setProgress(false); // hide loader
        toast.success(response.data.message); // show success toast
        navigate('/'); // redirect to home
      })
      .catch((err) => {
        console.log(err);
        setProgress(false); // hide loader on error
      });
  }

    console.log(Signup);
    return (
        <>
            <div className="signup">
                <div className="signup_card">
                    <div className="signup_title">
                        SignUp
                    </div>
                    <div className="signup_input">
                        <input type="text" className="sign_Input" onChange={(e) => { handleInput(e, "channelName") }} value={Signup.channelName} placeholder="Channel Name" />
                        <input type="text" className="sign_Input" onChange={(e) => { handleInput(e, "userName") }} value={Signup.userName} placeholder="User Name" />
                        <input type="password" className="sign_Input" onChange={(e) => { handleInput(e, "password") }} value={Signup.password} placeholder="Password" />
                        <input type="text" className="sign_Input" onChange={(e) => { handleInput(e, "about") }} value={Signup.about} placeholder="About Your Channel" />
                        <input type="text" className="sign_Input" onChange={(e) => { handleInput(e, "profilePic") }} value={Signup.profilePic} placeholder="Channel logo" />

                        {/* <div className="img_upload">
                            <input type="file" />
                            <div className="image_upload_sign">
                               {Signup.profilePic &&  <img src="" value={Signup.profilePic} className="Image_default" alt="" />}
                            </div>
                        </div> */}
                        <div className="signupbtn">
                            <div className="signbtn" onClick={handleSignUp}>Sign Up</div>
                            <Link to={'/'} className="signbtn">Home</Link>
                        </div>
                        {progress && <Box sx={{ width: '100%' }}>
                            <LinearProgress />
                        </Box>}
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default SignUp;