import React, {useRef} from "react";
import Post from "./post";
import Pagination from "../pagination";
import PopularPosts from "../popular-posts";
import Categories from "../categoties";
import ClipLoader from "react-spinners/ClipLoader";
import Loadable from "react-loadable";
import useOnScreen from "../../hooks/usOneScreen";
const Tags = Loadable({
    loader: () => import("../tags"),
    loading: ClipLoader,
});
import "./style.css";


const Posts = ({posts, pageContext, children, slug = '/', changePagination = null, loading = false, html}) => {
    const tagsRef = useRef(null);
    const isVisible = useOnScreen(tagsRef)
    return (
        <section className="blog-posts">
            <div className="container">
                <div className="grid-box">
                    <div className="left-wrapper">
                        {html}
                        {loading ? <div className="blog-posts__loader"><ClipLoader /></div> :
                            <>
                                {posts.map(
                                    ({title, databaseId, date, featuredImage, uri, categories, excerpt}, index) => (
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
                                    changePagination={changePagination}
                                    path={slug}
                                    currentPage={pageContext.page}
                                    totalPage={pageContext.totalPages}
                                    postsPerPage={pageContext.postsPerPage}
                                />
                            </>
                        }
                    </div>
                    <aside ref={tagsRef}>
                        <PopularPosts/>
                        <Categories/>
                        {isVisible ? <Tags /> : null}
                    </aside>
                </div>
            </div>
            <div className="container bottom-blog-post">
                {children}
            </div>
        </section>
    );
};

export default React.memo(Posts);