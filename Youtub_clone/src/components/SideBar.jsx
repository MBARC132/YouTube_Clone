import React from "react"
import './App.css';
// import { } from '@fortawesome/free-solid-svg-icons';
function SideBar(props){
    return (
        <>
        <div className="sidebar">
            <span className="sidebar_icon">{props.icon}</span>
            <h2 className="sidebar_title">{props.title}</h2>
        </div>
        </>
    )
}

export default SideBar;