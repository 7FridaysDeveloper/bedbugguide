import React from "react";
import {graphql} from "gatsby";
import Posts from "../../components/posts";
import Seo from "gatsby-plugin-wpgraphql-seo";

const AuthorPage = ({pageContext, data}) => {
    return (
        <>
            <div>
                <Posts
                    html={<>
                        <h2 className="page_title_archive-author">{data.wpUser.name}</h2>
                        <div className="page_wrapper_subtitle_archive-author">
                            <h4 className="page_subtitle_archive-author">All Posts from {data.wpUser.name}</h4>
                        </div>
                    </>}
                    slug={pageContext.uri}
                    posts={data.allWpPost.nodes}
                    pageContext={pageContext}
                />
            </div>

        </>
    );
};

export default AuthorPage;

export const Head = ({data: {wpUser}, pageContext}) => {
    const pageOf = pageContext.page > 1 ? ` - Page ${pageContext.page} of ${pageContext.totalPages}` : '';
    wpUser.seo.title = `${wpUser.seo.title} ${pageOf}`
    return (
        <>
            <link rel="canonical" href={process.env.CURRENT_URL+wpUser.uri}/>
            <Seo
                postSchema={JSON.parse(wpUser.seo?.schema?.raw)}
                post={wpUser}
            />
            <title>{wpUser.seo.title} {pageOf}</title>
        </>
    );
}

export const pageQuery = graphql`
  query MyQueryUser($offset: Int!, $postsPerPage: Int!, $catId: Int!) {
  wpUser(databaseId: {eq: $catId}) {
    id
    name
    uri
    seo {
      metaDesc
      metaRobotsNofollow
      metaRobotsNoindex
      opengraphDescription
      schema {
        raw
      }
      title
      twitterDescription
      twitterTitle
      language
      canonical
      region
      opengraphTitle
    }
  }
  allWpPost(
    sort: {fields: [date], order: DESC}
    limit: $postsPerPage
    skip: $offset
    filter: {authorDatabaseId: {eq: $catId}}
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
      databaseId
    }
  }
}
`;
