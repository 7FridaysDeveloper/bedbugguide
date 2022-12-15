import React, {useRef} from "react";
import YouTube from 'react-youtube';
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
                : null
            }
        </div>
    )
}