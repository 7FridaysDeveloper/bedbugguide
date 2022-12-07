import React from "react";
import { Link } from "gatsby";
import SvgFacebook from '../../images/svg/fb.svg';
import SvgTwitter from '../../images/svg/twitter.svg';
import SvgGoogle from '../../images/svg/google.svg';
import SvgPinterest from '../../images/svg/pinterest.svg';

import './style.css';


const Share = () => {
    const url = process.env.CURRENT_URL;
/*
    const url = process.env.CURRENT_URL;
    let imageSrc = image?.node?.localFile?.childImageSharp?.gatsbyImageData?.images?.fallback?.src;
    const imageURL = imageSrc !== undefined ? url + imageSrc : '';
*/

    return(
        <div className="share">
            <span>Share us:</span>
            <Link to={`https://www.facebook.com/sharer.php?u=${url}`}><SvgFacebook/></Link>
            <Link to={`https://twitter.com/share?url=${url}text=?&count=horizontal?`}><SvgTwitter/></Link>
            <Link to={`https://plus.google.com/share?url=${url}`}><SvgGoogle/></Link>
            <Link to={`https://pinterest.com/pin/create/button/?url=${url}`}><SvgPinterest/></Link>



           {/*     <Link target="_blank" to={`https://www.facebook.com/sharer/sharer.php?u=${url}`}><span className="share-count">Shares: 34.7k </span> Facebook</Link>
                <Link target="_blank" to={`https://twitter.com/intent/tweet?url=${url}&text=${title}&count=horizontal`}><span className="share-count">Shares: 35 </span> Twitter</Link>
                <Link target="_blank" to={`https://plus.google.com/share?url=${url}`}><span className="share-count"> Shares: 119 </span> Google+</Link>
                <Link target="_blank" to={`https://pinterest.com/pin/create/button/?url=${url}&amp;media=${imageURL}&amp;description=${title}?`}><span className="share-count"> Shares: 213 </span> Pinterest+</Link>

            */}


        </div>
    )
}

export default Share;