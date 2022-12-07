import React from "react";
import {graphql} from "gatsby";
import Posts from "../../components/posts";
import Seo from "gatsby-plugin-wpgraphql-seo";

const ArchivePage = ({pageContext, data}) => {
    return (
        <>
            <div>
                <div className="container">
                    <h2 className="page_title_archive">Category Archives: {data.wpCategory?.name} </h2>
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

export default ArchivePage;

export const Head = ({ data : { wpCategory }, pageContext }) => {
    const pageOf = pageContext.page > 1 ? ` - Page ${pageContext.page} of ${pageContext.totalPages}` : '';
    wpCategory.seo.title = `${wpCategory.seo.title} ${pageOf}`
    return (
        <>
            <link rel="canonical" href={process.env.CURRENT_URL+wpCategory.uri}/>
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
        count
        name
        uri
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
          }
        }
        databaseId
      }
    }
  }
`;
