import React from "react";
import {graphql} from "gatsby";
import Posts from "../../components/posts";
import BedBugProduct from "../../components/bed-bug-products";
import RecentComments from "../../components/recent-comments";
import BedBugsPosts from "../../components/bed-bugs-recent-posts";
import Tags from "../../components/tags";


const ArchivePage = ({ data, pageContext }) => {
    console.log('ArchivePage')
    return (<>
            <div>
                <Posts posts={data.allWpPost.nodes} pageContext={pageContext} />
                <div className="footer-top-wrap">
                    <div className="container">
                        <Tags />
                        <RecentComments />
                        <BedBugsPosts />
                        <BedBugProduct />
                    </div>
                </div>
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
                 gatsbyImageData(
                    breakpoints: [540, 991]
                    width: 700
                )
              }
            }
          }
        }
        categories {
          nodes {
            name
            id
            uri
          }
        }
        tags {
          nodes {
            name
            id
            uri
          }
        }
        databaseId
      }
    }
}
`;
