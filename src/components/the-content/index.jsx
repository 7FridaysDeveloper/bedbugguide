import React from "react";
import parse from "html-react-parser";
import './style.css';

const TheContent = ({text , title}) => {
    return(
        <div className="the-content">
            <h2>{title}</h2>
             {parse(text)}
        </div>
    )
}

export default TheContent;