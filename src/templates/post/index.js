import React from "react";
import { graphql } from "gatsby";
import SinglePost from "../../components/single-post";
import PopularPosts from "../../components/popular-posts";
import Categories from "../../components/categoties";
import BedBugs from "../../components/single-bed-bugs";
import RecentComments from "../../components/recent-comments";
import Tags from "../../components/tags";
import BedBugsPosts from "../../components/bed-bugs-recent-posts";
import BedBugProduct from "../../components/bed-bug-products";
import Seo from "gatsby-plugin-wpgraphql-seo";

import './style.css';

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
                    <Tags />
                    <RecentComments />
                    <BedBugsPosts />
                    <BedBugProduct />
                </div>
            </div>
        </div>
    );

};

export default Post;

export const Head = ({data}) => {
    const opengraphImage = data.post.seo?.opengraphImage;
    const themeOptions = data.wp.themeGeneralSettings?.themeOptions;

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
            <link rel="canonical" href={process.env.CURRENT_URL+data.post.uri}/>
            <meta property="article:published_time" content={ data.post?.dateGmt}/>
            <meta property="article:modified_time" content={data.post?.modifiedGmt}/>
            <meta property="og:image" content={process.env.CURRENT_URL + opengraphImage?.publicUrl} />
            <meta property="og:image:width" content={opengraphImage?.width} />
            <meta property="og:image:height" content={opengraphImage?.height} />
            <meta property="og:image:type" content={opengraphImage?.mimeType} />
            <Seo post={data.post} postSchema={data.post?.seo?.schema?.raw}/>
        </>
    )
}

export const pageQuery = graphql`
  query BlogPostById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
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
            opengraphImage {
                height
                width
                mimeType
                publicUrl
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
      databaseId
      modifiedGmt
      dateGmt
      uri
      commentStatus
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
             firstName
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
              gatsbyImageData(quality: 80)
            }
          }
        }
      }
      related_posts {
        nodes {
          title
          uri
          databaseId
          author {
             node {
                 name
                 uri
             }
          }
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
              uri
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

