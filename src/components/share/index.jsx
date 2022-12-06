import React from "react";
import { Link } from "gatsby";
import SvgFacebook from '../../images/svg/fb.svg';
import SvgTwitter from '../../images/svg/twitter.svg';
import SvgGoogle from '../../images/svg/google.svg';
import SvgPinterest from '../../images/svg/pinterest.svg';

import './style.css';


const Share = () => {

    const url = window.location;

    return(
        <div className="share">
            <span>Share us:</span>
            <Link to={`https://www.facebook.com/sharer.php?u=${url}`}><SvgFacebook/></Link>
            <Link to={`https://twitter.com/share?url=${url}text=How%20to%20Identify%20a%20Bed%20Bug?&count=horizontal?`}><SvgTwitter/></Link>
            <Link to={`https://plus.google.com/share?url=${url}`}><SvgGoogle/></Link>
            <Link to={`https://pinterest.com/pin/create/button/?url=${url}`}><SvgPinterest/></Link>

        </div>
    )
}

export default Share;