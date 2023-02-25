import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Robin's blog`,
    siteUrl: "https://hyebinyang.github.io",
    me: {
      github: "https://github.com/HyeBinYang",
    },
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-prismjs"],
      },
    },
    "gatsby-plugin-sitemap",
  ],
};

export default config;
