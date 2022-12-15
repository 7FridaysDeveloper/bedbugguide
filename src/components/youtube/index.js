import React, {useRef} from "react";
import YouTube from 'react-youtube';
//import YoutubePlaySvg from '../../images/svg/youtube-play.svg'
import useOnScreen from "../../hooks/usOneScreen";

import './style.css'

export default function YouTubeLazy({videoId, style}) {
    const iframeRef = useRef(null);
    const onScreenRef = useOnScreen(iframeRef)

    return (
        <div style={style} className="youtube-component" ref={iframeRef}>
            {onScreenRef ?
                <YouTube
                    videoId={videoId}
                    loading={'lazy'}
                    opts={{...style}}
                />
                :
                <div>
                    <img
                        src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
                        alt="youtube-video"
                        loading="lazy"/>
                </div>
            }
        </div>
    )
}