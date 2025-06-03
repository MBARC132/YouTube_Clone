import React, { useEffect, useState } from "react";
import './Watch.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Watch = ({ isSidebarActive, setIsSidebarActive }) => {
    // State for storing new comment input
    const [message, setMessage] = useState("");

    // State for storing video details
    const [data, setData] = useState(null);

    // State for video URL
    const [videourl, setVideoUrl] = useState("");

    // State for storing comments related to the video
    const [comments, setComment] = useState([]);

    // Getting the video ID from URL params
    const { id } = useParams();

    console.log("Video ID:", id);

    // Hide sidebar on component mount
    useEffect(() => {
        setIsSidebarActive(false);
    }, []);

    // Function to fetch video data by ID from backend
    const fetchVideoById = async () => {
        await axios.get(`http://localhost:5000/getVideoById/${id}`).then((response) => {
            console.log(response);
            setData(response.data.video); // set video details
            setVideoUrl(response?.data?.video?.videoLink); // set video link
        }).catch(err => {
            console.log(err);
        });
    }

    // Function to get comments related to a video from backend
    const getCommentByVideoId = async () => {
        await axios.get(`http://localhost:5000/comment/${id}`).then((response) => {
            console.log(response);
            setComment(response.data.comments); // set comment list
        }).catch(err => {
            console.log(err);
        });
    }

    // Fetch video data and comments when component loads
    useEffect(() => {
        fetchVideoById();
        getCommentByVideoId();
    }, [])

    // Function to post a new comment
    const handleComment = async () => {
        const body = {
            "message": message,
            "video": id
        }

        // POST request to backend to add new comment
        axios.post("http://localhost:5000/comment", body, { withCredentials: true }).then((resp) => {
            console.log(resp);
            const newComment = resp.data.comment;

            // Add new comment to the top of the list
            setComment([newComment, ...comments]);

            // Clear input field
            setMessage("");
        }).catch((err) => {
            console.log(err);
            toast.error("Please Login First"); // Error toast if not logged in
        });
    }
    return (
        <div className={`video ${isSidebarActive ? "sidebar-notactive" : "sidebar-Active"}`}>
            <div className="videoPostsection">
                <div className="video_youtube">
                    {data && <video width="400" controls autoPlay className="Display_video" src={videourl}>Your Browser Does not support</video>}
                </div>
                <div className="About_Video">
                    <div className="video_title">{data?.title}</div>
                    <div className="youtube_profile">
                        <div className="profile_left">
                            <Link to={`/user/${data?.user?._id}`} className="profile_img">
                                <img className="Image" src={data?.profilePic} alt="" />
                            </Link>
                            <div className="Subsview">
                                <div className="User">{data?.user?.channelName}</div>
                                <div className="subScribers">{data?.user?.createdAt.slice(0, 10)}</div>
                            </div>
                            <div className="SubBtn">Subscribe</div>
                        </div>
                        <div className="left_prof">
                            <div className="LikeBtn">
                                <div className="Like"><FontAwesomeIcon icon={faThumbsUp} />
                                    <div className="NumLike">{32}</div>
                                </div>
                                <div className="divider"></div>
                                <div className="dislike"><FontAwesomeIcon icon={faThumbsDown} /></div>
                            </div>

                            <div className="LikeBtn">Share</div>
                            <div className="LikeBtn">Download</div>
                        </div>
                    </div>
                    <div className="Description">
                        <div>{data?.createdAt.slice(0, 10)}</div>
                        <div>{data?.description}</div>
                    </div>
                </div>
                <div className="Comment_section">
                    <div className="Comment_title">{comments.length} Comment</div>
                    <div className="NewComment">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" className="comment_img" />
                        <div className="AddComment">
                            <input type="text" value={message} onChange={(e) => { setMessage(e.target.value) }} className="Comment_input" placeholder="Add a comment" />
                            <div className="cancelCom">
                                <div className="cancel">Cancel</div>
                                <div className="cancel" onClick={handleComment}>Comment</div>
                            </div>
                        </div>
                    </div>
                    <div className="OthersComment">
                        {
                            comments?.length > 0 && comments.map((item, index) => {
                                return (
                                    <div className="NewComment" key={item._id || index}>
                                        <img src={data?.user?.profilePic} alt="" className="comment_img" />
                                        <div className="Otherscomment_section">
                                            <div className="comment_header">
                                                <div className="channel_name">{item?.user?.channelName}</div>
                                                <div className="Time">{item?.createdAt.slice(0, 10)}</div>
                                            </div>
                                            <div className="othersComment">
                                                {item?.message}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

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
            <ToastContainer />
        </div>
    )
}

export default Watch;