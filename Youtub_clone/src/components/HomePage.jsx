import React from "react";
import './HomePage.css';
import Tags from "./Tags";
import VideoCard from "./VideoCard";

function HomePage() {
  return (
    <>
      <div className="homepage">
        <Tags />
          <VideoCard
            thumbnail="https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg"
            duration="15:02"
            title="React JS Crash Course"
            channelName="MBARC"
            views="1.2M views"
            timestamp="1 week ago"
          />

          <VideoCard
            thumbnail="https://img.youtube.com/vi/tgbNymZ7vqY/mqdefault.jpg"
            duration="10:45"
            title="Node.js for Beginners"
            channelName="CodeMaster"
            views="890K views"
            timestamp="3 days ago"
          />

          <VideoCard
            thumbnail="https://img.youtube.com/vi/3fumBcKC6RE/mqdefault.jpg"
            duration="8:21"
            title="JavaScript Async/Await Explained"
            channelName="DevSimplified"
            views="547K views"
            timestamp="2 weeks ago"
          />

          <VideoCard
            thumbnail="https://img.youtube.com/vi/9bZkp7q19f0/mqdefault.jpg"
            duration="4:13"
            title="K-Pop Dance Practice"
            channelName="MusicZone"
            views="3.5M views"
            timestamp="4 months ago"
          />

          <VideoCard
            thumbnail="https://img.youtube.com/vi/ysz5S6PUM-U/mqdefault.jpg"
            duration="12:30"
            title="Advanced CSS Flexbox Tutorial"
            channelName="DesignPro"
            views="760K views"
            timestamp="2 weeks ago"
          />

          <VideoCard
            thumbnail="https://img.youtube.com/vi/M7FIvfx5J10/mqdefault.jpg"
            duration="20:14"
            title="Python for Data Science"
            channelName="DataWorld"
            views="1M views"
            timestamp="3 days ago"
          />

          <VideoCard
            thumbnail="https://img.youtube.com/vi/oHg5SJYRHA0/mqdefault.jpg"
            duration="6:45"
            title="Understanding CSS Grid"
            channelName="DesignLab"
            views="420K views"
            timestamp="1 month ago"
          />

          <VideoCard
            thumbnail="https://img.youtube.com/vi/VbNF9X1waSc/mqdefault.jpg"
            duration="9:10"
            title="JavaScript ES6 Features"
            channelName="JS Academy"
            views="890K views"
            timestamp="2 weeks ago"
          />

          <VideoCard
            thumbnail="https://img.youtube.com/vi/9No-FiEInLA/mqdefault.jpg"
            duration="11:55"
            title="Building REST APIs with Express"
            channelName="BackendHub"
            views="650K views"
            timestamp="5 days ago"
          />

          <VideoCard
            thumbnail="https://img.youtube.com/vi/kJQP7kiw5Fk/mqdefault.jpg"
            duration="3:30"
            title="Top 10 Music Hits"
            channelName="MusicWorld"
            views="2.4M views"
            timestamp="2 months ago"
          />
      </div>
    </>
  );
}

export default HomePage;
