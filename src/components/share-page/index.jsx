import React from "react";
import {Link} from "gatsby";
import SvgFacebook from '../../images/svg/fb.svg';
import SvgTwitter from '../../images/svg/twitter.svg';
import SvgGoogle from '../../images/svg/google.svg';
import SvgPinterest from '../../images/svg/pinterest.svg';

import './style.css';

const SharePage = ({image , title , slug}) => {


    /*const data = useStaticQuery(graphql`
        query SocialSettings {
          wp {
            id
            themeGeneralSettings {
              themeOptions {
                enableSocialButtons
              }
            }
          }
        }
     `);*/

    //console.log(data.wp?.themeGeneralSettings?.themeOptions?.enableSocialButtons , '12312312');


    const slugPage = slug !== undefined ? slug : null;
    const url = process.env.CURRENT_URL;

    let imageSrc = image?.node?.localFile?.childImageSharp?.gatsbyImageData?.images?.fallback?.src;
    const imageURL = imageSrc !== undefined ? url + imageSrc : '';
    return(

                <div className="share-page">
                    <p>Does anyone you know battle with bed bugs? Share us with them:</p>
                    <div className="line black"></div>
                    <ul>
                        <span>Share us:</span>
                        <li className="facebook">
                            <Link target="_blank" to={`https://www.facebook.com/sharer.php?u=${url}${slugPage}&t=${title}`}><span className="share-count"><SvgFacebook/> Shares: 34.7k </span> Facebook</Link>
                        </li>
                        <li className="twitter">
                            <Link target="_blank" to={`https://twitter.com/share?url=${url}${slugPage}&text=${title}&count=horizontal`}><span className="share-count"><SvgTwitter/> Shares: 35 </span> Twitter</Link>
                        </li>
                        <li className="google">
                            <Link target="_blank" to={`https://plus.google.com/share?url=${url}${slugPage}`}><span className="share-count"><SvgGoogle /> Shares: 119 </span> Google+</Link>
                        </li>
                        <li className="pinterest">
                            <Link target="_blank" to={`https://pinterest.com/pin/create/button/?url=${url}${slugPage}&media=${imageURL}&description=${title}`}><span className="share-count"><SvgPinterest/> Shares: 213 </span> Pinterest+</Link>
                        </li>
                    </ul>
                </div>

    )
}

export default SharePage;