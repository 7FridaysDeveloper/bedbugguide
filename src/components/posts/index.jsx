import React from "react";
import "./style.css";
import Post from "./post";
import Pagination from "../pagination";
import PopularPosts from "../popular-posts";
import Categories from "../categoties";
import Tags from "../tags";



const Posts = ({posts, pageContext, children}) => {
    return (
        <section className="blog-posts">
            <div className="container">
                <div className="grid-box">
                    <div className="left-wrapper">
                        {posts.map(
                            ({title, databaseId, date, featuredImage, uri, categories, tags} ,index) => (
                                <Post
                                    index={index}
                                    categories={categories}
                                    tags={tags}
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
                        <PopularPosts/>
                        <Categories/>
                        <Tags/>
                    </aside>
                </div>
            </div>
            <div className="container bottom-blog-post">
                {children}
            </div>
        </section>
    );
};

export default Posts;