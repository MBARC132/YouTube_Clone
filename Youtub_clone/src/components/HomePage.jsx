import React, { useEffect, useState } from "react";
import './HomePage.css';
import Tags from "./Tags";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import Header from "./Header";
import axios from "axios";

function HomePage({isSidebarActive,searchQuery}) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedTag, setSelectedTag] = useState("All");


  useEffect(() => {
    axios.get('http://localhost:5000/allvideo').then(res => {
      console.log(res.data.videos)
      setData(res.data.videos)
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  useEffect(() => {
    if (searchQuery.trim() !== '') {
      // Search filtering
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
      // Tag filtering
      if (selectedTag === "All") {
        setFilteredData(data);
      } else {
        const tagFiltered = data.filter(video => {
          const tags = video.tags || [];
          const category = video.category || '';
          return tags.includes(selectedTag) || category === selectedTag;
        });
        setFilteredData(tagFiltered);
      }
    }
  }, [searchQuery, selectedTag, data]);

  function onTagSelect(tag) {
    setSelectedTag(tag);
  }
  console.log('isSidebarActive:', isSidebarActive);
  console.log('className:', `homepage ${isSidebarActive ? 'sidebar-open' : 'sidebar-closed'}`);

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
