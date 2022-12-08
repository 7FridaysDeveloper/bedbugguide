import React from "react";
import parse from "html-react-parser";
import {graphql, Link, useStaticQuery} from "gatsby";
//import usePopularPosts from "../hooks/usePopularPosts";

const FooterPopularPost = () => {
    const { allWpPost } = useStaticQuery(graphql`
    query PopularPostsFooter {
      allWpPost(limit: 8) {
        nodes {
          uri
          title
          databaseId
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
        <ul>
            {allWpPost?.nodes.map(post => (
                <li className="post-cat" key={post.databaseId}>
                    <div className="post-category">
                        <Link to={'/category/' + post.categories?.nodes[0]?.uri}>{post.categories?.nodes[0]?.name}</Link>
                    </div>
                    <h3 className="post-title">
                        <Link to={post.uri}>{parse(post.title)}</Link>
                    </h3>
                </li>
            ))}
        </ul>
    )
}

export default React.memo(FooterPopularPost)