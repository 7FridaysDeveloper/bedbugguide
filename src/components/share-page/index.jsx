import React from "react";
import {Link} from "gatsby";
import './style.css';


const SharePage = () => {
    return(
        <div className="share-page">
            <p>Does anyone you know battle with bed bugs? Share us with them:</p>
            <div className="line black"></div>
            <ul>
                <li className="facebook">
                    <Link to={'https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.bedbugguide.com%2Fhow-to-identify-a-bed-bug%2F&amp;t=How%20to%20Identify%20a%20Bed%20Bug?'}><span className="share-count">Shares: 34.7k </span> Facebook</Link>
                </li>
                <li className="twitter">
                    <Link to={'https://twitter.com/share?url=https%3A%2F%2Fwww.bedbugguide.com%2Famerican-family-awarded-1-6m-settlement-after-3-year-old-child-scarred-by-bed-bugs%2F&amp;text=American%20Family%20Awarded%20$1.6M%20Settlement%20After%203-Year-Old%20Child%20Scarred%20by%20Bed%20Bugs&amp;count=horizontal'}><span className="share-count">Shares: 35 </span> Twitter</Link>
                </li>
                <li className="google">
                    <Link to={'/'}><span className="share-count"> Shares: 119 </span> Google+</Link>
                </li>
                <li className="pinterest">
                    <Link to={'/'}><span className="share-count"> Shares: 213 </span> Pinterest+</Link>
                </li>
            </ul>
        </div>
    )
}

export default SharePage;