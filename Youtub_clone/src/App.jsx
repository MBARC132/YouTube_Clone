import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import VideoCard from "./components/VideoCard";



function App(){
  return(
    <>
    <Header/>
     <VideoCard
        thumbnail="https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
        title="Best Music Video Ever"
        channel="Rick Astley"
        views="550M views"
        timestamp="2 years ago"
        channelImage="https://yt3.ggpht.com/ytc/AKedOLSAyUuTT7xLb8VnZjlfhY5b7cJ6F4OpzDA9ZoY=s88-c-k-c0x00ffffff-no-rj"
      />
    </>
  )
}
export default App;
