import React from "react";
import './Watch.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const Watch = () => {
    return (
        <div className="video">
            <div className="videoPostsection">
                <div className="video_youtube">
                    <video width="400" controls autoPlay className="Display_video" src="https://www.w3schools.com/html/mov_bbb.mp4">Your Browser Does not support</video>
                </div>
                <div className="About_Video">
                    <div className="video_title">{"React Js Tutorial"}</div>
                    <div className="youtube_profile">
                        <div className="profile_left">
                            <div className="profile_img">
                                <img className="Image" src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
                            </div>
                            <div className="Subsview">
                                <div className="User">{'User1'}</div>
                                <div className="subScribers">{'250k SubScribers'}</div>
                            </div>
                            <div className="SubBtn">Subscribe</div>
                        </div>
                        <div className="LikeBtn">
                            <div className="Like"><FontAwesomeIcon icon={faThumbsUp} />
                            <div className="NumLike">{32}</div>
                            </div>
                            <div className="divider"></div>
                            <div className="dislike"><FontAwesomeIcon icon={faThumbsDown}/></div>
                            </div>
                    </div>
                    <div className="Description">
                        <div>2025-05-21</div>
                        <div>This is the cool video</div>
                    </div>
                </div>
                <div className="Comment_section">
                    <div className="Comment_title">1 Comment</div>
                    <div className="NewComment">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" className="comment_img" />
                        <div className="AddComment">
                            <input type="text" className="Comment_input" placeholder="Add a comment"/>
                            <div className="cancelCom">
                                <div className="cancel">Cancel</div>
                                <div className="cancel">Comment</div>
                            </div>
                        </div>
                    </div>
                    <div className="OthersComment">
                       <div className="NewComment">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" className="comment_img" />
                        <div className="Otherscomment_section">
                            <div className="comment_header">
                                <div className="channel_name">UserName</div>
                                <div className="Time">2025-05-21</div>
                            </div>
                            <div className="othersComment">
                                This is cool
                            </div>
                        </div>
                        </div> 
                    </div>
                </div>
            </div>
            <div className="videoSuggestion">
                 <div className="video_block">
                    <div className="video_thumb">
                        <img className="video_thum" src="https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg" alt="" />
                    </div>
                    <div className="video_details">
                        <div className="video_Stitle">Top 10 Programming Languages to Learn in 2025</div>
                        <div className="chan_name">RaectJS</div>
                        <div className="chan_name">136k views . 1 day ago </div>
                    </div>
                 </div>
                </div>
        </div>
    )
}

export default Watch;