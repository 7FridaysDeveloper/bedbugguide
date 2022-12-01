import React from "react";
import {Link} from "gatsby";
import FeaturedImage from "../posts/featured-image";

const NextPost = (next) => {
    return(
        <div className="next flex">
            <Link className="image" to={next?.next?.uri}><FeaturedImage image={next?.next?.featuredImage.node.localFile} /></Link>
            <div>
                <Link className="txt" to={next?.next?.uri}>NEXT POST</Link>
                <Link to={next?.next?.uri}><span>{next?.next?.title}</span></Link>
            </div>
        </div>
    )
}

export default NextPost;