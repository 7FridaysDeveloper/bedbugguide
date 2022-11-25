import React from "react";
import "./style.css";
import Post from "./post";


const BannerPost = ({ posts }) => {
    return (
        <section className="banner_news">
            <div className="container">
                <div className="text_wrap">
                    <h1>Be in touch with 7Fridays</h1>
                </div>
                <div className="posts">
                    {posts.map(
                        ({ title, databaseId, date, featuredImage, uri }) => (
                            <Post
                                key={databaseId}
                                title={title}
                                date={date}
                                featuredImage={featuredImage?.node.localFile}
                                uri={uri}
                            />
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

export default BannerPost;