import React, { useState } from "react";
import './SignUp.css';
import { Link } from "react-router-dom";

function SignUp(){

    const [Signup , setSignUp] = useState({"channelName":"" , "userName": "" , "password":"", "about":"", "profilePic":""})

    const handleInput = (event, name) => {
        setSignUp({
            ...Signup, [name]:event.target.value
        })
    }

console.log(Signup);
    return(
        <>
        <div className="signup">
            <div className="signup_card">
                <div className="signup_title">
                    SignUp
                </div>
                <div className="signup_input">
                    <input type="text" className="sign_Input" onChange={(e)=> {handleInput(e,"channelName")}} value={Signup.channelName} placeholder="Channel Name" />
                    <input type="text" className="sign_Input" onChange={(e)=> {handleInput(e,"userName")}} value={Signup.userName} placeholder="User Name" />
                    <input type="password" className="sign_Input" onChange={(e)=> {handleInput(e,"password")}} value={Signup.password} placeholder="Password" />
                    <input type="text" className="sign_Input" onChange={(e)=> {handleInput(e,"about")}} value={Signup.about} placeholder="About Your Channel" />

                    <div className="img_upload">
                        <input type="file" />
                        <div className="image_upload_sign">
                            <img src="" value={Signup.profilePic} className="Image_default" alt="" />
                        </div>
                    </div>
                    <div className="signupbtn">
                        <div className="signbtn">Sign Up</div>
                        <Link to={'/'} className="signbtn">Home</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SignUp;