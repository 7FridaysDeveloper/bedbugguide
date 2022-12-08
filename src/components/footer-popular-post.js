import React from "react";
import parse from "html-react-parser";
import {graphql, Link, useStaticQuery} from "gatsby";

const FooterPopularPost = () => {
    const { allWpPost } = useStaticQuery(graphql`
    query PopularPostsFooter {
      allWpPost(limit: 8) {
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
        <ul>
            {allWpPost?.nodes?.map(post => (
                <li className="post-cat" key={post.databaseId}>
                    <div className="post-category">
                        <Link to={post.categories?.nodes[0].slug}>{post.categories?.nodes[0]?.name}</Link>
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