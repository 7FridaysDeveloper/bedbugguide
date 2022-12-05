import React from "react";
import {graphql} from "gatsby";
import Posts from "../../components/posts";
import Seo from "gatsby-plugin-wpgraphql-seo";
import FooterScript from "../../wp-scripts/footer-script";

const TagPage = ({pageContext, data}) => {
    return (
        <>
            <div>
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

export const Head = ({ data : { wpTag } }) => {
    return (
        <>
            <FooterScript />
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
                    quality: 80
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
