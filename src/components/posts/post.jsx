import React from "react";
import FeaturedImage from "./featured-image";
import { Link } from "gatsby";
import parse from "html-react-parser";

const Post = ({ title, featuredImage, uri, categories , excerpt ,  index }) => {
    return (

            <div className="item">
                <Link to={uri} partiallyActive={true} className="img">
                    <FeaturedImage image={featuredImage} lazy={index > 3} />
                </Link>
                <div className="txt">
                    <div className="post-category">
                        {categories.nodes.slice(0, 4).map((cat, index, array) => (
                            <Link to={cat.uri} key={cat.id} >{cat.name} {index < array.length-1 ? ',' : null}</Link>
                        ))}
                        <h3><Link to={uri} partiallyActive={true}>{title}</Link></h3>
                        <div className="excerpt">
                            {parse(excerpt)}                        </div>
                    </div>
                </div>
            </div>


    );
};

export default Post;
