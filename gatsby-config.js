const path = require("path");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(
    process.cwd(),
    "node_modules",
    "gatsby",
    "dist",
    "utils",
    "eslint-rules"
);
module.exports = {
  siteMetadata: {
    title: `7fridays`,
    siteUrl: process.env.WORDPRESS,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-netlify",
    "gatsby-plugin-optimize-svgs",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-yoast-sitemap`,
      options: {
        baseUrl: process.env.WORDPRESS,
        gatsbyUrl: process.env.CURRENT_URL,
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `7fridays`,
    //     short_name: `7fridays`,
    //     description: `IT company`,
    //     lang: `en`,
    //     start_url: `/`,
    //     display: `standalone`,
    //     icon: `src/images/fav.png`
    //   },
    // },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "src": path.resolve(__dirname, "src/"),
        },
        extensions: ["js", "jsx"],
      },
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        // Gatsby required rules directory
        rulePaths: [gatsbyRequiredRules],
        // Default settings that may be ommitted or customized
        stages: ["develop"],
        extensions: ["js", "jsx", "ts", "tsx"],
        exclude: ["node_modules", "bower_components", ".cache", "public"],
        // Any additional eslint-webpack-plugin options below
        // ...
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: false,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `dominantColor`,
          formats: ["auto", "webp"],
          quality: 80,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: 'Lato',
            weights: ['300', '400', '700']
          },
          {
            family: 'Merriweather',
            weights: ['400', '700']
          }
        ]
      }
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: `${process.env.WORDPRESS}/graphql`,
        schema: {
          requestConcurrency: 1,
        },
        // type: {
        //   __all: {
        //     limit: 5
        //   },
        // },
      }
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layout/index.jsx`),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `./src/images`,
      },
      __key: "images",
    },
    // {
    //   resolve: `gatsby-plugin-purgecss`,
    //   options: {
    //     printRejected: true,
    //     develop: true,
    //   },
    // },
    // "gatsby-plugin-webpack-bundle-analyser-v2",
    // "gatsby-plugin-perf-budgets",
  ],
};
