import React from "react";
import {graphql} from "gatsby";
import Posts from "../../components/posts";
import Seo from "gatsby-plugin-wpgraphql-seo";
//import {Helmet} from "react-helmet";

const ArchivePage = ({pageContext, data}) => {
    console.log(data)
    return (
        <>
            <Seo
                postSchema={JSON.parse(data.wpCategory.seo?.schema?.raw)}
                post={data.wpCategory}
            />
            <div>
                <Posts
                    posts={data.allWpPost.nodes}
                    pageContext={pageContext}
                />
            </div>
            {/*<Helmet>*/}
            {/*    <title>data.wpCategory.seo.tit</title>*/}
            {/*</Helmet>*/}
        </>
    );
};

export default ArchivePage;

export const pageQuery = graphql`
  query WordPressPostCategory($offset: Int!, $postsPerPage: Int!, $catId: Int!) {
     wpCategory(databaseId: {eq: $catId}) {
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
    }
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
