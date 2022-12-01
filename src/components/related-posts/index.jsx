import React from "react";
import {Link} from "gatsby";
import CalendarSvg from '../../images/svg/calendar.svg'

import './style.css';

const RelatedPosts = ({posts}) => {
    return (
        <div className="related-post wrapper-items">
            <h4>Related Posts</h4>
            <div className="line"></div>
            <div className="grid-box-post">
                {posts?.nodes.map(post => (
                    <div className="post-cat" key={post.databaseId}>
                        <div className="post-category">
                            {post.categories?.nodes.map((item) => {
                                return <Link key={item.id} to={item.uri}>{item.name}</Link>
                            })}
                        </div>
                        <h3 className="post-title">
                            <Link to={post.uri}>{post.title}</Link>
                        </h3>
                        <div className="entry-meta">
                        <span className="author">
                            <Link  to={post?.author?.node.uri}>{post?.author?.node.name}</Link>
                        </span>
                            <span className="date">
                                <CalendarSvg/>
                                {post.date}
                            </span>
                        </div>
                    </div>
                ))}

            </div>
        </div>


    );
};

export default RelatedPosts;