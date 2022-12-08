import React from "react";
import {graphql} from "gatsby";
import Posts from "../../components/posts";
import Seo from "gatsby-plugin-wpgraphql-seo";

const TagPage = ({pageContext, data}) => {
    return (
        <>
            <div>
                <div className="container">
                    <h2 className="page_title_archive">Category Archives: {data.wpTag?.name} </h2>
                </div>
                <Posts
                    slug={pageContext.uri}
                    posts={data.allWpPost.nodes}
                    pageContext={pageContext}
                />
            </div>

        </>
    );
};

export default TagPage;

export const Head = ({ data : { wpTag, wp }, pageContext }) => {
    const pageOf = pageContext.page > 1 ? ` - Page ${pageContext.page} of ${pageContext.totalPages}` : '';
    wpTag.seo.title = `${wpTag.seo.title} ${pageOf}`;
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
            <link rel="canonical" href={process.env.CURRENT_URL+wpTag.uri}/>
            <meta property="og:url" content={process.env.CURRENT_URL + wpTag.seo.opengraphUrl} />
            <Seo
                postSchema={JSON.parse(wpTag.seo?.schema?.raw)}
                post={wpTag}
            />
        </>
    );
}

export const pageQuery = graphql`
  query MyQueryTag($offset: Int!, $postsPerPage: Int!, $catId: Int!) {
  wp {
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
  wpTag(databaseId: {eq: $catId}) {
    id
    seo {
      cornerstone
      focuskw
      metaDesc
      metaKeywords
      metaRobotsNofollow
      metaRobotsNoindex
      opengraphAuthor
      opengraphDescription
      opengraphPublishedTime
      opengraphModifiedTime
      opengraphPublisher
      opengraphSiteName
      opengraphTitle
      opengraphType
      opengraphUrl
      schema {
        raw
      }
      title
      twitterDescription
      twitterTitle
    }
    count
    name
    uri
  }
  allWpPost(
    sort: {fields: [date], order: DESC}
    limit: $postsPerPage
    skip: $offset
    filter: {tags: {nodes: {elemMatch: {databaseId: {eq: $catId}}}}}
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
