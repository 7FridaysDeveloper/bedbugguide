import React from "react";
import {Link} from "gatsby";
import parse from "html-react-parser";
import usePopularPosts from "../hooks/usePopularPosts";

const FooterPopularPost = () => {
    const popularPost = usePopularPosts(8);

    return (
        <ul>
            {popularPost.map(post => (
                <li className="post-cat" key={post.id}>
                    <div className="post-category">
                        <Link to={'/' + post.categories[0].slug}>{post.categories[0]?.name}</Link>
                    </div>
                    <h3 className="post-title">
                        <Link to={post.uri}>{parse(post.title)}</Link>
                    </h3>
                </li>
            ))}
        </ul>
    )
}

export default React.memo(FooterPopularPost)