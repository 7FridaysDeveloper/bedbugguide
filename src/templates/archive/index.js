import React from "react";
import {graphql} from "gatsby";
import Posts from "../../components/posts";
import SearchByTag from "../../components/search-by-tag";
import RecentComments from "../../components/recent-comments";
import RecentPost from "../../components/recent-posts";
import About from '../../components/static-sections/about';
import Tabs from "../../components/static-sections/tabs";

const ArchivePage = ({ data, pageContext }) => {
    console.log(data)
    return (<>
            <div>
                <Posts posts={data.allWpPost.nodes} pageContext={pageContext} >

                    <About />
                    <Tabs />
                </Posts>
                <div className="footer-top-wrap">
                    <div className="container">
                        <SearchByTag />
                        <RecentComments />
                        <RecentPost />
                        <SearchByTag />
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
                    placeholder: BLURRED
                    transformOptions: { fit: OUTSIDE }
                    width: 500
                    breakpoints: [540, 991]
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
        databaseId
      }
    }
}
`;
