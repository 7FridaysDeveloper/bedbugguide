import React from "react";
import parse from "html-react-parser";
import {youtubeParser} from "../../util/helpers";
import YouTubeLazy from "../youtube";

import './style.css';

const TheContent = ({text, title}) => {
    if(!text) return null;
    return(
        <div className="the-content">
            <h2>{title}</h2>
             {parse(text, {
                 replace: domNode => {
                     if (domNode.name === 'iframe' && youtubeParser(domNode.attribs.src)) {
                         return (
                             <YouTubeLazy
                                 videoId={youtubeParser(domNode.attribs.src)}
                                 style={{height: domNode.attribs.height+'px', width: domNode.attribs.width+'px'}}
                             />
                         )
                     }
                 }
             })}
        </div>
    )
}

export default TheContent;