import React from "react";
import "./VideoCard.css";

function VideoCard({ thumbnail, title, channel, views, timestamp, channelImage }) {
    <VideoCard
  thumbnail="https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
  title="Best Music Video Ever"
  channel="Rick Astley"
  views="550M views"
  timestamp="2 years ago"
  channelImage="https://yt3.ggpht.com/ytc/AKedOLSAyUuTT7xLb8VnZjlfhY5b7cJ6F4OpzDA9ZoY=s88-c-k-c0x00ffffff-no-rj"
/>

  return (
    <div className="videoCard">
      <img className="videoCard_thumbnail" src={thumbnail} alt="Video thumbnail" />
      <div className="videoCard_info">
        <img className="videoCard_avatar" src={channelImage} alt="Channel avatar" />
        <div className="videoCard_text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
