import React from "react";
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
                                return <a key={item.id} href={item.uri}>{item.name}</a>
                            })}
                        </div>
                        <h3 className="post-title">
                            <a href={post.uri}>{post.title}</a>
                        </h3>
                        <div className="entry-meta">
                        <span className="author">
                            <a  href={post?.author?.node.uri}>{post?.author?.node.name}</a>
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