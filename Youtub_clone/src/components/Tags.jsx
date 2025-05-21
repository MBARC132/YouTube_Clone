import React, { useEffect } from "react";
import './Tags.css';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Tags(){

    useEffect(() => {
        const tags = document.querySelectorAll(".MiniTag");
        if(tags){
            tags.forEach((tag) => {
                tag.addEventListener("click", ( ) => {
                    tags.forEach((tag) => tag.classList.remove("active"));
                    if(tag){
                        tag.classList.add("active")
                    }
                })
            })
        }
    }, [])
    return (
        <>
        <div className="tags">
            <div className="MiniTag active">All</div>
            <div className="MiniTag">Music</div>
            <div className="MiniTag">Technology</div>
            <div className="MiniTag">Mixes</div>
            <div className="MiniTag">Comedy</div>
            <div className="MiniTag">Education</div>
            <div className="MiniTag">News</div>
            <div className="MiniTag">Sports</div>
            <div className="MiniTag">Live</div>
            <div className="MiniTag">Gaming</div>
            <div className="MiniTag">Web Dev</div>
            <div className="MiniTag">React Js</div>
            <FontAwesomeIcon icon={faAngleRight}  className="next"/>
        </div>
        </>
    )
}

export default Tags;