import React from "react";
import {graphql} from "gatsby";
import Posts from "../../components/posts";

const ArchivePage = ({data, pageContext}) => {
    return (<>

            <div>
                <Posts posts={data.allWpPost.nodes} pageContext={pageContext}></Posts>
            </div>
        </>
    );
};

export default ArchivePage;

export const Head = ({ data: { wp }}) => {
    return (
        <>
            <title>{`${wp.allSettings?.generalSettingsTitle} ${wp.allSettings?.generalSettingsDescription}`}</title>
            <meta name="description" content={wp.allSettings?.generalSettingsDescription}/>
            <meta name="og:description" content={wp.allSettings?.generalSettingsDescription}/>
            <meta name="og:title" content={wp.allSettings?.generalSettingsTitle}/>
        </>
    );
}

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    wp { 
      allSettings {
          generalSettingsDescription
          generalSettingsTitle
      }
    }
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
