import React from "react";
import { graphql } from "gatsby";
import './style.css';
import SinglePost from "../../components/single-post";
import PopularPosts from "../../components/popular-posts";
import Categories from "../../components/categoties";
import BedBugs from "../../components/single-bed-bugs";
import SearchByTag from "../../components/search-by-tag";
import RecentComments from "../../components/recent-comments";
import RecentPost from "../../components/recent-posts";

const Post = (props) => {
    return (
        <div className="single-post">
            <div className="container">
                <div className="grid-box">
                    <SinglePost {...props}/>
                    <aside>
                        <BedBugs />
                        <PopularPosts/>
                        <Categories/>
                    </aside>
                </div>
            </div>
            <div className="footer-top-wrap">
                <div className="container">
                    <SearchByTag />
                    <RecentComments />
                    <RecentPost />
                    <SearchByTag />
                </div>
            </div>
        </div>


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
          uri
        }
      }
      author {
         node {
             name
             uri
         }
      }
      tags {
         nodes {
            uri
            name
         }
      }
      date(formatString: "MMM D, YYYY")
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

