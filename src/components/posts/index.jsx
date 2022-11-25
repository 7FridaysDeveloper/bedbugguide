import React from "react";
//import "./style.css";
import Post from "./post";




const Posts = ({ posts }) => {
    return (


        <section className="blog-posts">
            <div className="container">
                <div className="grid-box">
                    <div className="left-wrapper">
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
                    <aside>

                        {/*POPULAR POSTS*/}
                        <div className="popular-post wrapper-items">
                            <h4>Popular Posts</h4>
                            <div className="line"></div>
                            <div className="post-cat">
                                <div className="post-category">
                                    <a href="https://www.bedbugguide.com/category/general-information/">general
                                        information</a>
                                </div>
                                <h3 className="post-title"><a
                                    href="https://www.bedbugguide.com/pictures-of-adult-bed-bugs/">Pictures Of Adult
                                    Bed Bugs</a>
                                </h3>
                            </div>
                            <div className="post-cat">
                                <div className="post-category">
                                    <a href="https://www.bedbugguide.com/category/general-information/">general
                                        information</a>
                                </div>
                                <h3 className="post-title"><a
                                    href="https://www.bedbugguide.com/pictures-of-adult-bed-bugs/">Pictures Of Adult
                                    Bed Bugs</a>
                                </h3>
                            </div>
                            <div className="post-cat wrapper-items">
                                <div className="post-category">
                                    <a href="https://www.bedbugguide.com/category/general-information/">general
                                        information</a>
                                </div>
                                <h3 className="post-title"><a
                                    href="https://www.bedbugguide.com/pictures-of-adult-bed-bugs/">Pictures Of Adult
                                    Bed Bugs</a>
                                </h3>
                            </div>
                        </div>

                        {/*CATEGOTRIES*/}
                        <div className="categories">
                            <h4>categories</h4>
                            <div className="line"></div>
                            <div className="categories">
                                <ul>
                                    <li>
                                        <div className="number">1</div>
                                        <div className="summary"><a
                                            href="https://www.bedbugguide.com/category/bed-bug-bites/"
                                            title="View all posts in bed bug bites">bed bug bites<small>6
                                            Articles</small></a></div>
                                    </li>
                                    <li>
                                        <div className="number">2</div>
                                        <div className="summary"><a
                                            href="https://www.bedbugguide.com/category/bed-bug-facts/"
                                            title="View all posts in bed bug facts">bed bug facts<small>14
                                            Articles</small></a></div>
                                    </li>
                                    <li>
                                        <div className="number">3</div>
                                        <div className="summary"><a
                                            href="https://www.bedbugguide.com/category/bed-bug-interview/"
                                            title="View all posts in bed bug interview">bed bug interview<small>2
                                            Articles</small></a></div>
                                    </li>
                                </ul>
                            </div>

                            {/*TAGS*/}
                            <div className="tags">
                                <h4>Tags</h4>
                                <div className="line"></div>
                                <div className="tags-wrap">
                                    <a href="#">Tags1</a>
                                    <a href="#">Tags2</a>
                                    <a href="#">Tags3</a>
                                </div>
                            </div>

                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default Posts;