import React from "react";
import { Link } from "gatsby";
import SvgFacebook from '../../images/svg/fb.svg';
import SvgTwitter from '../../images/svg/twitter.svg';
import SvgGoogle from '../../images/svg/google.svg';
import SvgPinterest from '../../images/svg/pinterest.svg';

import './style.css';


const Share = () => {
    return(
        <div className="share">
            <span>Share us:</span>
            <Link to={'https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.bedbugguide.com%2Fhow-to-identify-a-bed-bug%2F&amp;t=How%20to%20Identify%20a%20Bed%20Bug?'}><SvgFacebook/></Link>
            <Link to={'https://twitter.com/share?url=https%3A%2F%2Fwww.bedbugguide.com%2Fhow-to-identify-a-bed-bug%2F&text=How%20to%20Identify%20a%20Bed%20Bug?&count=horizontal?'}><SvgTwitter/></Link>
            <Link to={'https://plus.google.com/share?url=https%3A%2F%2Fwww.bedbugguide.com%2Fhow-to-identify-a-bed-bug%2F'}><SvgGoogle/></Link>
            <Link to={'https://pinterest.com/pin/create/button/?url=https%3A%2F%2Fwww.bedbugguide.com%2Fhow-to-identify-a-bed-bug%2F&amp;media=&amp;description=How%20to%20Identify%20a%20Bed%20Bug?'}><SvgPinterest/></Link>

        </div>
    )
}

export default Share;