import React from "react";
import "./style.css";
import Post from "./post";
import Pagination from "../pagination";
import PopularPosts from "../popular-posts";
import Categories from "../categoties";





const Posts = ({ posts , pageContext }) => {
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
                        <Pagination
                            currentPage={pageContext.page}
                            totalPage={pageContext.totalPages}
                            postsPerPage={pageContext.postsPerPage}
                        />
                    </div>
                    <aside>

                        {/*POPULAR POSTS*/}
                        <PopularPosts/>

                        {/*CATEGOTRIES*/}
                        <Categories/>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default Posts;