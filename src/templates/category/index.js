import React from "react";
import {graphql} from "gatsby";
import Posts from "../../components/posts";
import Seo from "gatsby-plugin-wpgraphql-seo";

const ArchivePage = ({pageContext, data}) => {
    return (
        <>
            <div>
                <Posts
                    posts={data.allWpPost.nodes}
                    pageContext={pageContext}
                />
            </div>

        </>
    );
};

export default ArchivePage;

export const Head = ({ data : { wpCategory } }) => {
    return (
        <>
            <meta property="og:url" content={process.env.CURRENT_URL + wpCategory.seo.opengraphUrl} />
            <Seo
                postSchema={JSON.parse(wpCategory.seo?.schema?.raw)}
                post={wpCategory}
            />
        </>
    );
}

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
