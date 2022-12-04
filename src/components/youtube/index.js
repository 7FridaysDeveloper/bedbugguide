import React, {useState} from "react";
import YouTube from 'react-youtube';
import YoutubePlaySvg from '../../images/svg/youtube-play.svg'
import './style.css'
export default function YouTubeLazy({videoId, style}) {
    const [show, setShow] = useState(false);
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
                <div>
                    <img
                        src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
                        alt="youtube-video"
                        loading="lazy"/>
                    <YoutubePlaySvg onClick={showVideo} />
                </div>
            }
        </div>
    )
}