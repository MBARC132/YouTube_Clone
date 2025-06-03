import React, { useEffect } from "react";
import './Tags.css';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Tags({ selectedTag, onTagSelect }) {
    // List of tags to display
    const tags = [
        "All", "Music", "Technology", "Mixes", "Comedy",
        "Education", "News", "Sports", "Live", "Gaming",
        "Web Dev", "React Js"
    ];

    // useEffect runs once after first render
    // It adds event listeners to all tags so that when one is clicked,
    // it removes "active" class from all tags and adds "active" to the clicked one.
    // This is a manual DOM manipulation approach.
    useEffect(() => {
        const tags = document.querySelectorAll(".MiniTag");
        if (tags) {
            tags.forEach((tag) => {
                tag.addEventListener("click", () => {
                    tags.forEach((tag) => tag.classList.remove("active"));
                    if (tag) {
                        tag.classList.add("active");
                    }
                });
            });
        }
    }, []);
    return (
        <>
            <div className="tags">
                {tags.map(tag => (
                    <div
                        key={tag}
                        className={`MiniTag ${tag === selectedTag ? "active" : ""}`}
                        onClick={() => onTagSelect(tag)}>
                        {tag}
                    </div>
                ))}
                <FontAwesomeIcon icon={faAngleRight} className="next" />
            </div>
        </>
    )
}

export default Tags;