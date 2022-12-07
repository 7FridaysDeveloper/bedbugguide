import React from "react";
import {graphql} from "gatsby";
import Posts from "../../components/posts";
import RecentComments from "../../components/recent-comments";
import WordpressSearch from "../../components/wordpress-search";
import Tags from "../../components/tags";
import Tabs from "../../components/static-sections/tabs";
import BedBugProduct from "../../components/bed-bug-products"
import BedBugsPosts from "../../components/bed-bugs-recent-posts";

const ArchivePage = ({data, pageContext, location}) => {


    return (<>
            <div>
                {location.search === '' ?
                    <Posts posts={data.allWpPost.nodes} pageContext={pageContext}/> :
                    <WordpressSearch search={location.search} path={location.pathname} seo={data.wp.allSettings?.generalSettingsTitle}/>
                }
                <div className="container">
                    <Tabs/>
                </div>
                <div className="footer-top-wrap">
                    <div className="container">
                        <Tags/>
                        <RecentComments/>
                        <BedBugsPosts/>
                        <BedBugProduct/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ArchivePage;

export const Head = ({data: {wp}, location, pageContext}) => {
    const pageOf = pageContext.page > 1 ? `Page ${pageContext.page} of ${pageContext.totalPages}` : '';
    return (
        <>
            <link rel="canonical" href={process.env.CURRENT_URL}/>
            {!location.pathname.includes('?s=') ?  <title>{`${wp.allSettings?.generalSettingsTitle} ${pageOf} ${wp.allSettings?.generalSettingsDescription}`}</title> : <title>You searched for  a - {wp.allSettings?.generalSettingsTitle}</title>}
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
                    quality: 95
                    breakpoints: [200, 400, 700],
                    sizes: "(max-width: 500px) 200px, 400px, 700px"
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
