import React, { useRef } from "react";
import {graphql} from "gatsby";
import useOnScreen from "../../hooks/usOneScreen";
import Posts from "../../components/posts";
import WordpressSearch from "../../components/wordpress-search";
import Loadable from "react-loadable";
import ClipLoader from "react-spinners/ClipLoader";

const About = Loadable({
    loader: () => import("../../components/static-sections/about"),
    loading: ClipLoader,
});

const Tabs = Loadable({
    loader: () => import("../../components/static-sections/tabs"),
    loading: ClipLoader,
});

const BedBugProduct = Loadable({
    loader: () => import("../../components/bed-bug-products"),
    loading: ClipLoader,
});

const RecentComments = Loadable({
    loader: () => import("../../components/recent-comments"),
    loading: ClipLoader,
});

const BedBugsPosts = Loadable({
    loader: () => import("../../components/bed-bugs-recent-posts"),
    loading: ClipLoader,
});

const Tags = Loadable({
    loader: () => import("../../components/tags"),
    loading: ClipLoader,
});

const ArchivePage = ({data, pageContext, location}) => {
    const tagsRef = useRef(null);
    const isVisible = useOnScreen(tagsRef)

    console.log(isVisible)
    return (<>
            <div>
                {location.search === '' ?
                    <Posts posts={data.allWpPost.nodes} pageContext={pageContext}/> :
                    <WordpressSearch search={location.search} path={location.pathname} seo={data.wp.allSettings?.generalSettingsTitle}/>
                }
                <div className="container">
                    <About/>
                    <Tabs/>
                </div>
                <div className="footer-top-wrap">
                    <div className="container" ref={tagsRef}>
                        {isVisible ? <Tags /> : null}
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
    const themeOptions = wp.themeGeneralSettings?.themeOptions;
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: `
                :root {
                    --bg_header: ${themeOptions.mainBackground};
                    --hover_color: ${themeOptions.hoverColor};
                    --main_color: ${themeOptions.mainColor};
                    --title_color: ${themeOptions.titleColor};
                    --text_color: ${themeOptions.bodyTextColor};
                }
            `}}>
            </style>
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
      themeGeneralSettings {
          themeOptions {
            bodyTextColor
            hoverColor
            mainColor
            mainBackground
            titleColor
          }
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
