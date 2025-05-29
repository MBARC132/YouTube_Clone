import React, { useEffect, useState } from "react";
import "./Profile.css"
import ProfileImg from "../assets/logo1.png"
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function Profile(){
    const [data, setData] = useState([])
    const [user, setUser] = useState(null)
    const {id} = useParams();
    const fetchProfileData = async()=> {
        axios.get(`http://localhost:5000/${id}/channel`).then((response) => {
            console.log(response)
            setData(response.data.video)
            setUser(response.data.video[0]?.user);
        }).catch((err)=> {
            console.log(err)
        })
        // console.log(id)
    }
    useEffect(()=> {
        fetchProfileData();
    }, [])
    return(
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
                        <Link key = {item._id} to={`/watch/${item._id}`} className="profileVideo_block">
                            <div className="profile_thumb">
                                <img className="Profile_VImg" src={item?.thumbnail} alt="" />
                            </div>
                            <div className="profile_vdetail">
                                <div className="profile_vname">{item?.title}</div>
                                <div className="profile_vabout">455K views •  {item?.createdAt.slice(0,10)}</div>
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