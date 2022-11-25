import React from "react";
import {graphql} from "gatsby";
import Posts from "../../components/posts";


const ArchivePage = ({ data, pageContext }) => {
    return (<>
            <div>
                <Posts posts={data.allWpPost.nodes} pageContext={pageContext} ></Posts>
            </div>
        </>
    );
};

export default ArchivePage;

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
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
