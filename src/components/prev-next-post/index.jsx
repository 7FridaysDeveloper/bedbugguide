import React from "react";
import './style.css';
import PrevPost from "./prev-post";
import NextPost from "./next-post";

const PrevNextPost = ({previous , next}) => {
    return (
        <div className="prev-next-post">
            <PrevPost prev={previous} />
            <NextPost next={next} />
        </div>
    )
}

export default PrevNextPost;
