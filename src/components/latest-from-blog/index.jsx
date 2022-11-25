import React from "react";
import Post from "../banner-posts/post";

import "./style.css";

const LastedFromBlog = ({ posts, showTitle = true , style = {}}) => {
    return (
        <section className="lasted-from-blog" style={style}>
            <div className="container">
                {showTitle ? (
                    <h2>
                        <span className="txt">Latest from the Blog</span>{" "}
                        <span className="line"></span>
                    </h2>
                ) : null}

                <div className="posts">
                    {posts.map(
                        ({ title, databaseId, date, featuredImage, uri, categories }) => (
                            <Post
                                key={databaseId}
                                title={title}
                                date={date}
                                featuredImage={featuredImage?.node.localFile}
                                uri={uri}
                                categories={categories.nodes}
                            />
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

export default LastedFromBlog
