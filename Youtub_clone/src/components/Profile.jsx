import React, { useEffect, useState } from "react";
import "./Profile.css"
import ProfileImg from "../assets/logo1.png"
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function Profile() {
    // State to hold the list of videos for the profile
    const [data, setData] = useState([]);

    // State to hold the user info of the channel owner
    const [user, setUser] = useState(null);

    // Get the 'id' parameter from the URL
    const { id } = useParams();

    // Fetch profile data (videos and user info) from backend API using the channel id
    const fetchProfileData = async () => {
        axios
            .get(`http://localhost:5000/${id}/channel`)
            .then((response) => {
                console.log(response);
                setData(response.data.video); // set videos array
                setUser(response.data.video[0]?.user); // set user info from first video
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // useEffect to call fetchProfileData once when component mounts
    useEffect(() => {
        fetchProfileData();
    }, []);
    return (
        <>
            <div className="Profile">
                <div className="profile_page">
                    <div className="profile_topS">
                        <div className="profile_topSP">
                            <img className="Profile_img" src={user?.profilePic} alt="" />
                        </div>
                        <div className="Profile_about">
                            <div className="Profile_name">{user?.channelName}</div>
                            <div className="profile_info">
                                @{user?.userName} • 65.5M subscribers • {data.length} videos
                            </div>
                            <div className="profile_info">
                                {user?.about}
                            </div>
                        </div>
                    </div>
                    <div className="profile_videos">
                        <div className="profile_Vtitle">Videos</div>
                        <div className="profilevideos">
                            {
                                data?.length > 0 && data.map((item) => {
                                    return (
                                        <Link key={item._id} to={`/watch/${item._id}`} className="profileVideo_block">
                                            <div className="profile_thumb">
                                                <img className="Profile_VImg" src={item?.thumbnail} alt="" />
                                            </div>
                                            <div className="profile_vdetail">
                                                <div className="profile_vname">{item?.title}</div>
                                                <div className="profile_vabout">455K views •  {item?.createdAt.slice(0, 10)}</div>
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;