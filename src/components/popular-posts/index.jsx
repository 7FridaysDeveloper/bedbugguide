import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import usePopularPosts from "../../hooks/usePopularPosts";
import parse from "html-react-parser";

import './style.css';

const PopularPosts = () => {
    const popularPost = usePopularPosts(4);
    return (

        <div className="popular-post wrapper-items">
            <h4>Popular Posts</h4>
            <div className="line"></div>
            <div className="grid-box-post">
                {popularPost.length === 0 ? <ClipLoader /> : popularPost.map(post => (
                    <div className="post-cat" key={post.id}>
                        <div className="post-category">
                            <a href={'/category/'+post.categories[0].slug}>{post.categories[0]?.name}</a>
                        </div>
                        <h3 className="post-title">
                            <a href={post.uri}>{parse(post.title)}</a>
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default React.memo(PopularPosts);