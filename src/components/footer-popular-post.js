import React from "react";
import parse from "html-react-parser";
import usePopularPosts from "../hooks/usePopularPosts";

const FooterPopularPost = () => {
    const popularPost = usePopularPosts(8);

    return (
        <ul>
            {popularPost.map(post => (
                <li className="post-cat" key={post.id}>
                    <div className="post-category">
                        <a href={'/' + post.categories[0].slug}>{post.categories[0]?.name}</a>
                    </div>
                    <h3 className="post-title">
                        <a href={post.uri}>{parse(post.title)}</a>
                    </h3>
                </li>
            ))}
        </ul>
    )
}

export default React.memo(FooterPopularPost)