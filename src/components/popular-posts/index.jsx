import React, { useEffect, useState } from "react";
import CalendarSvg from '../../images/svg/calendar.svg'
import { Link } from "gatsby";
import ClipLoader from "react-spinners/ClipLoader";
import './style.css';

const PopularPosts = () => {
    const [popularPost, setPopularPosts] = useState([]);
    console.log(popularPost, setPopularPosts)
    useEffect(() => {
         fetch(process.env.GATSBY_API_URL+'/posts?_embed=wp:term')
         .then(res => res.json())
         .then(posts => posts.map(post => {
             return {
                 title: post.title?.rendered,
                 cat: post?.['_embedded']['wp:term'],
                 id: post.id,
                 uri: '/'+post.slug,
             }
         })).then(posts => {
            const newPosts = posts.map((post) => {
                return {
                    ...post,
                    categories: Array.isArray(post.cat) ? post.cat[0] : [],
                }
            })

             setPopularPosts(newPosts.slice(0, 4));
         })

    }, [])
    console.log(popularPost)
    return (

        <div className="popular-post wrapper-items">
            <h4>Popular Posts</h4>
            <div className="line"></div>
            <div className="grid-box-post">
                {popularPost.length === 0 ? <ClipLoader /> : popularPost.map(post => (
                    <div className="post-cat" key={post.id}>
                        <div className="post-category">
                            <Link to={'/'+post.categories[0].slug}>{post.categories[0]?.name}</Link>
                        </div>
                        <h3 className="post-title">
                            <Link to={post.uri}>{post.title}</Link>
                        </h3>
                        <div className="entry-meta">
                        <span className="author">
                            <a href="http://bedbugguide.a-max.uk/author/admin/">BedBugGuide</a>
                        </span>
                            <span className="date">
                           <CalendarSvg/> Apr 27th, 2018</span>
                        </div>
                    </div>
                )) }

            </div>
        </div>






    );
};

export default PopularPosts;