import React from "react";
import parse from "html-react-parser";
import './style.css';

const TheContent = ({text}) => {
    if(!text) return null;
    return(
        <div className="the-content">
            <div className="container">
                 {parse(text)}
            </div>
        </div>
    )
}

export default TheContent;