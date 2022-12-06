import React from "react";
import {Link} from "gatsby";
import './style.css';


const SharePage = () => {
    const url = window.location;
    const title = "Title";

    return(
        <div className="share-page">
            <p>Does anyone you know battle with bed bugs? Share us with them:</p>
            <div className="line black"></div>
            <ul>
                <li className="facebook">
                    <Link target="_blank" to={`https://www.facebook.com/sharer/sharer.php?u=${url}`}><span className="share-count">Shares: 34.7k </span> Facebook</Link>
                </li>
                <li className="twitter">
                    <Link target="_blank" to={`https://twitter.com/intent/tweet?url=${url}&text=${title}&count=horizontal`}><span className="share-count">Shares: 35 </span> Twitter</Link>
                </li>
                <li className="google">
                    <Link target="_blank" to={`https://plus.google.com/share?url=${url}`}><span className="share-count"> Shares: 119 </span> Google+</Link>
                </li>
                <li className="pinterest">
                    <Link target="_blank" to={`https://pinterest.com/pin/create/button/?url=https%3A%2F%2Fwww.bedbugguide.com%2Fhow-to-identify-a-bed-bug%2F&amp;media=https://www.bedbugguide.com/wp-content/uploads/2022/11/3229987793_enormous_bug_zoomed_under_the_magnifying_glass__on_a_bedroom_mattress_-2.png&amp;description=How%20to%20Identify%20a%20Bed%20Bug?`}><span className="share-count"> Shares: 213 </span> Pinterest+</Link>
                </li>
            </ul>
        </div>
    )
}

export default SharePage;