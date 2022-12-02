import React from "react";
import parse from "html-react-parser";
import './style.css';

const TheContent = ({text, title}) => {
    if(!text) return null;
    return(
        <div className="the-content">
            <h2>{title}</h2>
             {parse(text)}
        </div>
    )
}

export default TheContent;