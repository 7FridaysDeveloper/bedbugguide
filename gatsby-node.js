
// const { setOptions, createPages } = require("./create/pages");
const { createPosts } = require("./create/posts");
const { createBlogPostArchive } = require("./create/archive");
const fetch = require('node-fetch');
// setOptions({
//   postTypes: ["Page"],
//   graphQLFieldGroupName: "flexible",
//   graphQLFieldName: "mainFlexibleContent",
// });

module.exports.createPages = async (gatsbyUtilities) => {
  await createPosts(gatsbyUtilities);
  //await createPages(gatsbyUtilities);
  await createBlogPostArchive(gatsbyUtilities)
};



exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type WpPost implements Node {
      related_posts: WpNodePost!
    }

    type WpNodePost implements Node {
      nodes: [WpPost]
    }
  `
  createTypes(typeDefs)
}

exports.createResolvers = ({ createResolvers }) =>
  createResolvers({
    WpPost: {
      related_posts: {
        resolve: async (source, args, context) => {
          const { databaseId } = source

          const response = await fetch(
            `${process.env.WORDPRESS}/wp-json/yarpp/v1/related/${databaseId}`
          ).then(res => res.json())

          if (response && response.length) {
            const result = await context.nodeModel.runQuery({
              query: {
                filter: { databaseId: { in: response.map(({ id }) => id) } },
              },
              type: 'WpPost',
            })
            return { nodes: result }
          } else return { nodes: [] }
        },
      },
    },
})

