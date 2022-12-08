import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import {graphql, useStaticQuery} from "gatsby";
import './style.css';

const PopularPosts = () => {

    const { allWpPost } = useStaticQuery(graphql`
    query PopularPosts {
      allWpPost(limit: 4) {
        nodes {
          databaseId
          title
          uri
          categories {
            nodes {
              uri
              name
            }
          }
        }
      }
    }
  `);
    return (

        <div className="popular-post wrapper-items">
            <h4>Popular Posts</h4>
            <div className="line"></div>
            <div className="grid-box-post">
                {allWpPost?.nodes?.length === 0 ? <ClipLoader /> : allWpPost?.nodes.map(post => (
                    <div className="post-cat" key={post.databaseId}>
                        <div className="post-category">
                            <a href={post.categories?.nodes[0]?.uri}>{post.categories?.nodes[0]?.name}</a>
                        </div>
                        <h3 className="post-title">
                            <a href={post.uri}>{post.title}</a>
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default React.memo(PopularPosts);