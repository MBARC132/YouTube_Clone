import React, { useEffect, useState } from "react";
import './HomePage.css';
import Tags from "./Tags";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import Header from "./Header";
import axios from "axios";

function HomePage({ isSidebarActive, searchQuery }) {
  // State to store all videos fetched from backend
  const [data, setData] = useState([]);

  // State to store videos filtered by search query or selected tag
  const [filteredData, setFilteredData] = useState([]);

  // State to keep track of currently selected tag filter; default is "All"
  const [selectedTag, setSelectedTag] = useState("All");

  // When component mounts, fetch all videos from backend API
  useEffect(() => {
    axios.get('http://localhost:5000/allvideo')
      .then(res => {
        console.log(res.data.videos);
        setData(res.data.videos);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  // Whenever searchQuery, selectedTag, or data changes, filter the video list accordingly
  useEffect(() => {
    if (searchQuery.trim() !== '') {
      // If user has entered a search query, filter videos by title or channel name
      const lower = searchQuery.toLowerCase();
      const searchFiltered = data.filter(video => {
        const title = video.title || '';
        const channelName = video.user?.channelName || '';
        return (
          title.toLowerCase().includes(lower) ||
          channelName.toLowerCase().includes(lower)
        );
      });
      setFilteredData(searchFiltered);
    } else {
      // If no search query, filter videos by selected tag/category
      if (selectedTag === "All") {
        // If "All" is selected, show all videos
        setFilteredData(data);
      } else {
        // Otherwise, filter videos where tags include the selectedTag or category matches selectedTag
        const tagFiltered = data.filter(video => {
          const tags = video.tags || [];
          const category = video.category || '';
          return tags.includes(selectedTag) || category === selectedTag;
        });
        setFilteredData(tagFiltered);
      }
    }
  }, [searchQuery, selectedTag, data]);

  // Handler function to update selected tag when user clicks a tag button
  function onTagSelect(tag) {
    setSelectedTag(tag);
  }
  // console.log('isSidebarActive:', isSidebarActive);
  // console.log('className:', `homepage ${isSidebarActive ? 'sidebar-open' : 'sidebar-closed'}`);

  return (
    <>
      <div className={`homepage ${isSidebarActive ? 'sidebar-open' : 'sidebar-closed'}`}>
        <Tags selectedTag={selectedTag} onTagSelect={onTagSelect} />
        {filteredData.map((item, ind) => (
          <VideoCard
            key={ind}
            id={item._id}
            thumbnail={item.thumbnail}
            duration={"15:02"}
            // profilePic={item.profilePic}
            title={item.title}
            channelName={item.user?.channelName || "Unknown"}
            views={"1.2M views"}
            timestamp={new Date(item.createdAt).toLocaleDateString()}
          />
        ))}
      </div>
    </>
  );

}

export default HomePage;
