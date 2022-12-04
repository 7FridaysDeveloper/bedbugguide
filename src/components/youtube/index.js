import React, {useState} from "react";
import YouTube from 'react-youtube';

import './style.css'
export default function YouTubeLazy({videoId, style}) {
    console.log(style)
    const [show, setShow] = useState(true);
    const showVideo = () => setShow(true);

    return (
        <div style={style} className="youtube-component">
            {show ?
                <YouTube
                    videoId={videoId}
                    loading={'lazy'}
                    opts={{...style, playerVars: { autoplay: 1 } }}
                />
                :
                <img
                    onClick={showVideo}
                    src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
                    alt="youtube-video"
                    loading="lazy"/>
            }
        </div>
    )
}