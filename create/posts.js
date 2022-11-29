const path = require(`path`)

module.exports.createPosts = async (gatsbyUtilities ) => {
  const posts = await getPosts(gatsbyUtilities)
  await createIndividualBlogPostPages({ posts, gatsbyUtilities }, `./src/templates/post/index.js`)
  const pages = await getPages(gatsbyUtilities);
  await createIndividualBlogPostPages({ posts: pages, gatsbyUtilities }, `./src/templates/page/index.js`)
};

const createIndividualBlogPostPages = async ({ posts, gatsbyUtilities }, template) => {

    return Promise.all(posts.map(({ previous, post, next }, index) =>
            // createPage is an action passed to createPages
            // See https://www.gatsbyjs.com/docs/actions#createPage for more info
            gatsbyUtilities.actions.createPage({
                // Use the WordPress uri as the Gatsby page path
                // This is a good idea so that internal links and menus work 👍

                path: post.uri,
                // use the blog post template as the page component
                component: path.resolve(template),

                // `context` is available in the template as a prop and
                // as a variable in GraphQL.
                context: {
                    defer: index > 10,
                    // we need to add the post id here
                    // so our blog post template knows which blog post
                    // the current page is (when you open it in a browser)
                    id: post.id,

                    // We also use the next and previous id's to query them and add links!
                    previousPostId: previous ? previous.id : null,
                    nextPostId: next ? next.id : null,
                },
            })
        )
    );
}

async function getPages({ graphql, reporter }) {
    const graphqlResult = await graphql(/* GraphQL */ `
    query WpPages {
     allWpPage(filter: {status: {eq: "publish"}}) {
        edges {
          post: node {
            id
            uri
          }
        }
      }
    }
  `);

    if (graphqlResult.errors) {
        reporter.panicOnBuild(
            `There was an error loading your pages`,
            graphqlResult.errors
        );
        return;
    }
    return graphqlResult.data.allWpPage.edges;
}

async function getPosts({ graphql, reporter }) {
  const graphqlResult = await graphql(/* GraphQL */ `
    query WpPosts {
      # Query all WordPress blog posts sorted by date
      allWpPost(sort: { fields: [date], order: DESC }) {
        edges {
          previous {
            id
          }
          # note: this is a GraphQL alias. It renames "node" to "post" for this query
          # We're doing this because this "node" is a post! It makes our code more readable further down the line.
          post: node {
            id
            uri
          }
          next {
            id
          }
        }
      }
    }
  `);

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors
    );
    return;
  }

  return graphqlResult.data.allWpPost.edges;
}
