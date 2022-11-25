import React from "react";
//import { StaticImage } from "gatsby-plugin-image";
import FeaturedImage from "./featured-image";
import { Link } from "gatsby";
const Post = ({ title, featuredImage, uri }) => {
    console.log(featuredImage);
    return (

            <div className="item">
                <Link to={uri} partiallyActive={true} className="img">
                    <FeaturedImage image={featuredImage} />
                </Link>
                <div className="txt">
                    <div className="post-category">
                        <Link to={uri} partiallyActive={true}>Bed Bug News  </Link>, <Link to={uri} partiallyActive={true}> Bed Bug News2 , </Link>
                        <h3><Link to={uri} partiallyActive={true}>{title}</Link></h3>
                        <div className="excerpt">
                            If you wonder what bed bugs are, how do they spread, just how fast they can infest your home and what you can do about it watch this quick video: If you...
                        </div>
                    </div>
                </div>
            </div>






    );
};

export default Post;
