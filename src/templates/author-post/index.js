import React from "react";
import {graphql} from "gatsby";
import Posts from "../../components/posts";
import Seo from "gatsby-plugin-wpgraphql-seo";

const AuthorPage = ({pageContext, data }) => {
    console.log(pageContext)
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

export default AuthorPage;

export const Head = ({ data : { wpUser } }) => {
    return (
        <>
            <Seo
                postSchema={JSON.parse(wpUser.seo?.schema?.raw)}
                post={wpUser}
            />
        </>
    );
}

export const pageQuery = graphql`
  query MyQueryUser($offset: Int!, $postsPerPage: Int!, $catId: Int!) {
  wpUser(databaseId: {eq: $catId}) {
    id
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
      databaseId
    }
  }
}
`;
