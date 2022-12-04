import React from "react";
import parse from "html-react-parser";
import './style.css';
import {youtubeParser} from "../../util/helpers";
import YouTubeLazy from "../youtube";

const TheContent = ({text, title}) => {
    if(!text) return null;
    return(
        <div className="the-content">
            <h2>{title}</h2>
             {parse(text, {
                 replace: domNode => {
                     if (domNode.name === 'iframe' && youtubeParser(domNode.attribs.src)) {
                         console.log(domNode)
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