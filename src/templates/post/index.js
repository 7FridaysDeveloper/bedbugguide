import React from "react";
import { graphql } from "gatsby";
import Seo from "gatsby-plugin-wpgraphql-seo";


const Post = () => {
    return (
        <>

        </>
    );
};

export default Post;

export const Head = ({data}) => {
    console.log(data)
    return <Seo post={data.post} />
}

export const pageQuery = graphql`
  query BlogPostById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    post: wpPost(id: { eq: $id }) {
        seo {
            canonical
            cornerstone
            focuskw
            metaDesc
            metaKeywords
            metaRobotsNofollow
            metaRobotsNoindex
            opengraphAuthor
            opengraphDescription
            opengraphModifiedTime
            opengraphPublishedTime
            opengraphPublisher
            opengraphSiteName
            opengraphTitle
            opengraphType
            opengraphUrl
            readingTime
            title
            twitterDescription
            twitterTitle
            schema {
              articleType
              pageType
              raw
            }
            breadcrumbs {
              text
              url
            }
            opengraphImage {
                publicUrl
                height
                width
            }
        }
      id
      uri
      excerpt
      title
      categories {
        nodes {
          name
          id
        }
      }
      date(formatString: "MMMM DD, YYYY")
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 50)
            }
          }
        }
      }
      related_posts {
        nodes {
          title
          uri
          databaseId
          date(formatString: "MMMM DD, YYYY")
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(quality: 50)
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
        }
      }
      content
    }
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 50)
            }
          }
        }
      }
    }
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 50)
            }
          }
        }
      }
    }
  }
`;
