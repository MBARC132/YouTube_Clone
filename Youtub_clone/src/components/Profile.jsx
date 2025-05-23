import React from "react";
import "./Profile.css"
import ProfileImg from "../assets/logo1.png"
function Profile(){
    return(
        <>
        <div className="Profile">
            <div className="profile_page">
                <div className="profile_topS">
                    <div className="profile_topSP">
                        <img className="Profile_img" src={ProfileImg} alt="" />
                    </div>
                     <div className="Profile_about">
                    <div className="Profile_name">MB Arc</div>
                    <div className="profile_info">
                      @mbarc • 65.5M subscribers • 4.5K videos
                    </div>
                    <div className="profile_info">
                      About Channel
                    </div>
                </div>
                </div>
                <div className="profile_videos">
                    <div className="profile_Vtitle">Videos</div>
                     <div className="profilevideos">
                        <div className="profileVideo_block">
                            <div className="profile_thumb">
                                <img className="Profile_VImg" src="https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg" alt="" />
                            </div>
                            <div className="profile_vdetail">
                                <div className="profile_vname">Video Title</div>
                                <div className="profile_vabout">455K views • 1 day ago</div>
                            </div>
                        </div>
                        <div className="profileVideo_block">
                            <div className="profile_thumb">
                                <img className="Profile_VImg" src="https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg" alt="" />
                            </div>
                            <div className="profile_vdetail">
                                <div className="profile_vname">Video Title</div>
                                <div className="profile_vabout">455K views • 1 day ago</div>
                            </div>
                        </div>
                        <div className="profileVideo_block">
                            <div className="profile_thumb">
                                <img className="Profile_VImg" src="https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg" alt="" />
                            </div>
                            <div className="profile_vdetail">
                                <div className="profile_vname">Video Title</div>
                                <div className="profile_vabout">455K views • 1 day ago</div>
                            </div>
                        </div>
                     </div>
                     
                </div>
            </div>
        </div>
        </>
    )
}

export default Profile;