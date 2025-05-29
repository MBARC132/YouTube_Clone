import React, { useEffect, useState } from "react";
import './HomePage.css';
import Tags from "./Tags";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import axios from "axios";

function HomePage() {
  const [data, setData] =useState([]);
    useEffect(()=>{
      axios.get('http://localhost:5000/allvideo').then(res =>{
        console.log(res.data.videos)
        setData(res.data.videos)
      }).catch((err)=>{
        console.log(err)
      })
    },[])
  return (
    <>
      <div className="homepage">
        <Tags />
        {
          data?.map((item, ind) => {
            return (
          <VideoCard
            key={ind}
            id={item._id}
            thumbnail={item.thumbnail}
            duration={"15:02"} // Replace with real duration if available
            title={item.title}
            channelName={item.user?.channelName || "Unknown"}
            views={"1.2M views"} // Replace with real views if available
            timestamp={new Date(item.createdAt).toLocaleDateString()}
          />
            )
          })
        }
          
      </div>
    </>
  );
}

export default HomePage;
