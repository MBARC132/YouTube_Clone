import React from "react";
import Header from "./components/Header";
// import Body from "./components/Body";
// import Footer from "./components/Footer";
// import VideoCard from "./components/VideoCard";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Watch from "./components/Watch";


function App(){
  return(
    <div>
    <Header/>
    <Routes>
      <Route path='/' element ={ <HomePage/> }></Route>
      <Route path='Watch/:id' element = {<Watch/>}></Route>
    </Routes>
     {/* <VideoCard/> */}
    </div>
  )
}
export default App;
