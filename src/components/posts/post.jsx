import React from "react";
import FeaturedImage from "./featured-image";
import {Link} from "gatsby";

const Post = ({title, featuredImage, uri, index, categories, tags}) => {
    const tagsArray = Array.isArray(tags?.nodes) || [];
    const categoriesArray = Array.isArray(categories.nodes) || [];
    const split = [...categoriesArray, ...tagsArray]
    return (

        <div className="item">
            <Link to={uri} partiallyActive={true} className="img">
                <FeaturedImage image={featuredImage} lazy={index > 3}/>
            </Link>
            <div className="txt">
                <div className="post-category">
                    {split.map((cat, index, array) => (
                        <Link to={cat.uri} key={cat.id} partiallyActive={true}>{cat.name} {index < array.length-1 ? ',' : null}</Link>
                    ))}
                    <h3><Link to={uri} partiallyActive={true}>{title}</Link></h3>
                    <div className="excerpt">
                        If you wonder what bed bugs are, how do they spread, just how fast they can infest your home and
                        what you can do about it watch this quick video: If you...
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Post;
