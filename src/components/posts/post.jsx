import React from "react";
import FeaturedImage from "./featured-image";

const Post = ({title, featuredImage, uri, index, categories}) => {
    return (

        <div className="item">
            <a href={uri} className="img">
                <FeaturedImage image={featuredImage} lazy={index > 0}/>
            </a>
            <div className="txt">
                <div className="post-category">
                    {categories.nodes.slice(0, 4).map((cat, index, array) => (
                        <a href={cat.uri} key={cat.id} >{cat.name} {index < array.length-1 ? ',' : null}</a>
                    ))}
                    <h3><a href={uri} >{title}</a></h3>
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
