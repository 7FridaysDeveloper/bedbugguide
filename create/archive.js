const path = require(`path`);
const chunk = require(`lodash/chunk`);

const getPagePath = (page, totalPages) => {
    if (page > 0 && page <= totalPages) {
        return page === 1 ? `/` : `/page/${page}`
    }
    return null
}

module.exports.createBlogPostArchive = async function (gatsbyUtilities) {
    await getCategories(gatsbyUtilities);
    const posts = await getPosts(gatsbyUtilities);
    await CreateArchivePage(gatsbyUtilities, posts, {isArchive: true}, getPagePath, './src/templates/archive/index.js');

}


async function CreateArchivePage(gatsbyUtilities, posts, options, getPagePath, template) {
    const graphqlResult = await gatsbyUtilities.graphql(`
    {
      wp {
        readingSettings {
          postsPerPage
        }
      }
    }
  `)

    let {postsPerPage} = graphqlResult.data.wp.readingSettings
    const postsChunkedIntoArchivePages = chunk(posts, postsPerPage)
    const totalPages = postsChunkedIntoArchivePages.length

    return Promise.all(
        postsChunkedIntoArchivePages.map(async (_posts, index) => {
            const pageNumber = index + 1

            console.log(getPagePath(pageNumber, totalPages));

            await gatsbyUtilities.actions.createPage({
                path: getPagePath(pageNumber, totalPages),
                component: path.resolve(template),
                context: {
                    ...options,
                    offset: index * postsPerPage,
                    page: pageNumber,
                    totalPages,
                    postsPerPage,
                },
            })
        })
    )
}

async function getCategories(gatsbyUtilities) {
    const graphqlResult = await gatsbyUtilities.graphql(/* GraphQL */ `
    query allWpCategories {
      # Query all WordPress blog posts sorted by date
      allWpCategory {
        nodes {
          name
          uri
          databaseId
          count
          posts {
            nodes {
              databaseId
            }
          }
        }
      }
    }
  `)
    if (graphqlResult.errors) {
        gatsbyUtilities.reporter.panicOnBuild(
            `There was an error loading your blog categories`,
            graphqlResult.errors
        )
        return
    }
    const categories = graphqlResult.data.allWpCategory.nodes;

    for (let cat of categories) {
        const getPagePath = (page, totalPages) => {
            if (page > 0 && page <= totalPages) {
                return page === 1 ? `${cat.uri}` : `${cat.uri}page/${page}`
            }
            return null
        }
        console.log(cat.posts.nodes);
        await CreateArchivePage(gatsbyUtilities, cat.posts.nodes, {
            isCategory: true,
            catId: cat.databaseId
        }, getPagePath, './src/templates/category/index.js')
    }


}

async function getPosts({graphql, reporter}) {
    const graphqlResult = await graphql(/* GraphQL */ `
    query WpPosts {
      # Query all WordPress blog posts sorted by date
      allWpPost(sort: { fields: [date], order: DESC }) {
        edges {
          # note: this is a GraphQL alias. It renames "node" to "post" for this query
          # We're doing this because this "node" is a post! It makes our code more readable further down the line.
          post: node {
            id
            uri
          }
        }
      }
    }
  `)

    if (graphqlResult.errors) {
        reporter.panicOnBuild(
            `There was an error loading your blog posts`,
            graphqlResult.errors
        )
        return
    }

    return graphqlResult.data.allWpPost.edges
}