import React from "react";
import { graphql } from "gatsby";


const Post = (props) => {
    console.log(props)
    return (
        <>

        </>
    );
};

export default Post;

export const pageQuery = graphql`
  query BlogPostById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    post: wpPost(id: { eq: $id }) {
      id
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
