import React from "react";
import PrevPost from "./prev-post";
import NextPost from "./next-post";

import './style.css';

const PrevNextPost = ({previous , next}) => {
    return (
        <div className="prev-next-post">
            <PrevPost prev={previous} />
            <NextPost next={next} />
        </div>
    )
}

export default PrevNextPost;
