import React from "react";
import './UploadVideo.css';


function UploadVideo(){
    return(
        <div className="uploadvideo">
            <div className="uploadbox">
                <div className="uploadtitle">
                    Upload Video
                </div>
                <div className="uploadForm">
                    <input type="text" className="uploadinput" placeholder="Title of the video" />
                    <input type="text" className="uploadinput" placeholder="Descriptions" />
                    <input type="text" className="uploadinput" placeholder="Category" />

                </div>
            </div>
        </div>
    )
}

export default UploadVideo;