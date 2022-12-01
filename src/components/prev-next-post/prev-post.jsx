import React from "react";
import {Link} from "gatsby";
import FeaturedImage from "../posts/featured-image";

const PrevPost = (prev) => {
    if(!prev.prev) return null;
    return(
        <div className="prev flex">
            <Link className="image" to={prev?.prev?.uri}><FeaturedImage image={prev?.prev?.featuredImage?.node?.localFile} /></Link>
            <div>
                <Link className="txt" to={prev?.prev?.uri}>PREVIOUS POST</Link>
                <Link to={prev?.prev?.uri}><span>{prev?.prev?.title}</span></Link>
            </div>

        </div>
    )
}

export default PrevPost;