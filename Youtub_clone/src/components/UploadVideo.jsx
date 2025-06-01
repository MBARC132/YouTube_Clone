import React, { useEffect, useState } from "react";
import './UploadVideo.css';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
function UploadVideo() {
  const [inputField, setInput] = useState({
    "title": "",
    "description": "",
    "category": "",
    "thumbnail": "",
    "videoLink": ""
  })
  const [loader, setLoader] = useState(false)
  const navigate = useNavigate();
  const handleInput = (event, name) => {
    setInput({
      ...inputField, [name]: event.target.value
    })
  }
  console.log(inputField)

  useEffect(() => {
    let isLogin = localStorage.getItem("userId");
    if (isLogin === null) {
      navigate('/');
    }
  }, [])

  const handleSubmit = async () => {
    const { title, description, category, thumbnail, videoLink } = inputField;

    // Simple frontend validation
    if (!title || !description || !category || !thumbnail || !videoLink) {
      alert("Please fill in all fields before uploading.");
      return;
    }
    setLoader(true);
    await axios.post('http://localhost:5000/Upload', inputField, { withCredentials: true }).then((res) => {
      console.log(res)
      navigate('/');
      setLoader(false);
    }).catch((err) => {
      console.log(err);
      setLoader(false);
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
