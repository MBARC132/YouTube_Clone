import React, { useEffect, useState } from "react";
import Header from "./components/Header";
// import VideoCard from "./components/VideoCard";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Watch from "./components/Watch";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
import UploadVideo from "./components/UploadVideo";
import axios from 'axios'
import { useLocation } from "react-router-dom";


function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarActive, setIsSidebarActive] = useState(false);


  const location = useLocation();
  const isWatchPage = location.pathname.startsWith("/watch");
 React.useEffect(() => {
  if (isWatchPage) {
    setIsSidebarActive(true);
  } else {
    setIsSidebarActive(false); 
  }
}, [isWatchPage]);
  const toggleSidebar = () => {
    setIsSidebarActive(prev => !prev);
  };
  useEffect(() => {
    axios.get('http://localhost:5000/allvideo').then(res => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  return (
    <div>
      <Header
        setSearchQuery={setSearchQuery}
        toggleSidebar={toggleSidebar}
        isSidebarActive={isSidebarActive}
        sWatchPage={isWatchPage}
      />
      <Routes>
        <Route path='/' element={<HomePage searchQuery={searchQuery} isSidebarActive={isSidebarActive}  />}></Route>
        {/* <Route path='Watch/:id' element = {<Watch/>}></Route> */}
        <Route path='/User/:id' element={<Profile />}></Route>
        <Route path="/watch/:id" element={<Watch isSidebarActive={isSidebarActive} toggleSidebar={toggleSidebar}  setIsSidebarActive={setIsSidebarActive} />} />
        <Route path='/SignUp' element={<SignUp />}></Route>
        <Route path="/UploadVideo" element={<UploadVideo />} />
      </Routes>
      {/* <VideoCard/> */}
    </div>
  )
}
export default App;
