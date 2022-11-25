import React from "react";
import {graphql} from "gatsby";
import Posts from "../../components/posts";


const ArchivePage = ({pageContext , data} ) => {
    return (<>
            <div><Posts posts={data.allWpPost.nodes} pageContext={pageContext} ></Posts></div>
        </>
    );
};

export default ArchivePage;

export const pageQuery = graphql`
  query WordPressPostCategory($offset: Int!, $postsPerPage: Int!, $catId: Int!) {
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
      filter: {categories: {nodes: {elemMatch: {databaseId: {eq: $catId}}}}}
    ) {
      nodes {
        excerpt
        uri
        date(formatString: "MMMM DD, YYYY")
        title
        featuredImage {
          node {
            sourceUrl
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        categories {
          nodes {
            name
            id
          }
        }
        databaseId
      }
    }
  }
`;
