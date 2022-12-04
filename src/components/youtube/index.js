import React, {useState, useLayoutEffect} from "react";
import YouTube from 'react-youtube';

import './style.css'
export default function YouTubeLazy({videoId, style}) {
    console.log(style)
    const [show, setShow] = useState(false);
    const showVideo = () => setShow(true);

    useLayoutEffect(() => {
        window.addEventListener('load', () => {
            setTimeout(() => {
                setShow(true);
            }, 10)
        }, { once: true })
    }, [])

    return (
        <div style={style} className="youtube-component">
            {show ?
                <YouTube
                    videoId={videoId}
                    opts={{ ...style }}
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