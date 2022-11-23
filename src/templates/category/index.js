import React from "react";
import {graphql} from "gatsby";


const ArchivePage = (props) => {
    console.log(props);
    return (<>
            <div>hello world</div>
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
