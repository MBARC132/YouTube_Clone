import React from "react";
import "./VideoCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEllipsisVertical, faPlus, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const VideoCard = ({id, thumbnail, duration, title, channelName, views, timestamp }) => {

  // const handleClick = () => {
  //   Navigate(`/watch/${id}`);
  // }
  return (
    <Link to = {`/watch/${id}`} >
    <div className="videoCard">
      <div className="watchLater">
        <FontAwesomeIcon icon={faClock} className="videoIcon" />
      </div>
      <div className="playlistAdd">
        <FontAwesomeIcon icon={faPlus} className="videoIcon" />
      </div>

      <img className="videoImg" src={thumbnail} alt="Video thumbnail" />
      <div className="duration">{duration}</div>

      <div className="videoData">
        <FontAwesomeIcon icon={faUserTie} />

        <div className="channelDetails">
          <h5>{title}</h5>
          <p className="c_name">{channelName}</p>
          <p>{views} • {timestamp}</p>
        </div>

        <FontAwesomeIcon icon={faEllipsisVertical} className="moreIcon" />
      </div>
    </div>
    </Link>
  );
};

export default VideoCard;

