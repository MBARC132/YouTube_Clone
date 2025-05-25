import React, { useState } from "react";
import './UploadVideo.css';
import { Link } from "react-router-dom";

function UploadVideo(){
    const [inputField, setInput] = useState({
        "title":"",
        "description":"",
        "videLink":"",
        "thumbnail":"",
        "videoUrl":""
    })
        const handleInput = (event, name) => {
        setInput({
            ...inputField, [name]:event.target.value
        })
    }
    console.log(inputField)
  return(
    <div className="uploadvideo">
      <div className="uploadbox">
        <div className="uploadtitle">Upload Video</div>
        <form className="uploadForm">
          <input type="text" className="uploadinput" onChange={(e) => {handleInput(e, "title")}} value={inputField.title} placeholder="Title of the video" />
          <input type="text" className="uploadinput" onChange={(e) => {handleInput(e, "description")}} value={inputField.description} placeholder="Description" />
          <input type="text" className="uploadinput" onChange={(e) => {handleInput(e, "videLink")}} value={inputField.videLink} placeholder="Category" />
          <input type="text" className="uploadinput" onChange={(e) => {handleInput(e, "thumbnail")}} value={inputField.thumbnail} placeholder="Add Video Tumbnail Url" />
          <input type="text" className="uploadinput" onChange={(e) => {handleInput(e, "videoUrl")}} value={inputField.videoUrl} placeholder="Enter Video Url" />
          {/* <label className="fileLabel">
            Thumbnail
            <input type="file"  accept="image/*" className="fileInput" />
          </label>
          <label className="fileLabel">
            Video
            <input type="file" accept="video/mp4, video/webm, video/*" className="fileInput" />
          </label> */}
          <div className="uploadBtns">
            <button type="submit" className="uploadbtn">Upload</button>
            <Link to="/" className="uploadbtn">Home</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UploadVideo;
