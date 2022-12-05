import React from "react";
import "./style.css";
import Post from "./post";
import Pagination from "../pagination";
import PopularPosts from "../popular-posts";
import Categories from "../categoties";
import Tags from "../tags";
import About from '../static-sections/about';
import Tabs from "../static-sections/tabs";


const Posts = ({posts, pageContext}) => {
    return (
        <section className="blog-posts">
            <div className="container">
                <div className="grid-box">
                    <div className="left-wrapper">
                        {posts.map(
                            ({title, databaseId, date, featuredImage, uri ,categories , excerpt} ,index) => (
                                <Post
                                    index={index}
                                    key={databaseId}
                                    title={title}
                                    date={date}
                                    featuredImage={featuredImage?.node.localFile}
                                    uri={uri}
                                    categories={categories}
                                    excerpt={excerpt}
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
                        {/*TAGS*/}
                        <Tags/>
                    </aside>
                </div>
            </div>
            <div className="container bottom-blog-post">
                <About/>
                <Tabs/>
            </div>
        </section>
    );
};

export default Posts;