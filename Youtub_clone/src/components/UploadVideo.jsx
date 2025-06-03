import React, { useEffect, useState } from "react";
import './UploadVideo.css';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
function UploadVideo() {
  // State to manage the input fields in the form
  const [inputField, setInput] = useState({
    "title": "",
    "description": "",
    "category": "",
    "thumbnail": "",
    "videoLink": ""
  })

  // State to manage the loading bar visibility
  const [loader, setLoader] = useState(false)

  // Navigation hook to redirect user
  const navigate = useNavigate();

  // Handle change in input fields and update state accordingly
  const handleInput = (event, name) => {
    setInput({
      ...inputField, [name]: event.target.value
    })
  }

  // Logging the current state of input fields to console for debugging
  console.log(inputField)

  useEffect(() => {
    // Check if user is logged in by checking local storage
    // If not logged in, redirect to homepage
    let isLogin = localStorage.getItem("userId");
    if (isLogin === null) {
      navigate('/');
    }
  }, [])

  // Function to handle form submission
  const handleSubmit = async () => {
    const { title, description, category, thumbnail, videoLink } = inputField;

    // Simple validation to ensure no field is left empty
    if (!title || !description || !category || !thumbnail || !videoLink) {
      alert("Please fill in all fields before uploading.");
      return;
    }

    // Show loading bar
    setLoader(true);

    // Make POST request to upload video data
    await axios.post('http://localhost:5000/Upload', inputField, { withCredentials: true }).then((res) => {
      console.log(res) // log server response
      navigate('/');   // go back to homepage after successful upload
      setLoader(false); // hide loading bar
    }).catch((err) => {
      console.log(err); // log any error that occurs
      setLoader(false); // hide loading bar
    })
  }
  return (
    <div className="uploadvideo">
      <div className="uploadbox">
        <div className="uploadtitle">Upload Video</div>
        <form className="uploadForm">
          <input type="text" className="uploadinput" onChange={(e) => { handleInput(e, "title") }} value={inputField.title} placeholder="Title of the video" />
          <input type="text" className="uploadinput" onChange={(e) => { handleInput(e, "description") }} value={inputField.description} placeholder="Description" />
          <input type="text" className="uploadinput" onChange={(e) => { handleInput(e, "category") }} value={inputField.category} placeholder="Category" />
          <input type="text" className="uploadinput" onChange={(e) => { handleInput(e, "thumbnail") }} value={inputField.thumbnail} placeholder="Add Video Tumbnail Url" />
          <input type="text" className="uploadinput" onChange={(e) => { handleInput(e, "videoLink") }} value={inputField.videoLink} placeholder="Enter Video Url" />
          {/* <label className="fileLabel">
            Thumbnail
            <input type="file"  accept="image/*" className="fileInput" />
          </label>
          <label className="fileLabel">
            Video
            <input type="file" accept="video/mp4, video/webm, video/*" className="fileInput" />
          </label> */}
          <div className="uploadBtns">
            <div className="uploadbtn" onClick={handleSubmit}>Upload</div>
            <Link to="/" className="uploadbtn">Home</Link>
          </div>
        </form>
        {loader && <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>}
      </div>
    </div>
  )
}

export default UploadVideo;
