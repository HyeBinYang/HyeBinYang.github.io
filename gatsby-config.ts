import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Robin's blog`,
    // siteUrl: `https://www.yourdomain.tld`,
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
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
  ],
};

export default config;
