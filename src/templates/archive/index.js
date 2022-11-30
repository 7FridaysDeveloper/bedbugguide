import React, { useContext } from "react";
import {graphql} from "gatsby";
import Posts from "../../components/posts";
import { Helmet } from "react-helmet";
import {SEOContext} from "gatsby-plugin-wpgraphql-seo";

const ArchivePage = ({data, pageContext}) => {
    const { seo, allSettings } = useContext(SEOContext);
    return (<>
            <Helmet>
                <title>{seo.meta?.homepage?.title}</title>
                <meta name="description" content={allSettings.generalSettingsDescription}/>
                <meta name="og:description" content={allSettings.generalSettingsDescription}/>
                <meta name="og:title" content={allSettings.generalSettingsTitle}/>
            </Helmet>
            <div>
                <Posts posts={data.allWpPost.nodes} pageContext={pageContext}></Posts>
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
