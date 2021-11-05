module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "testgatsby",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "alldata",
        fieldName: "alldata",
        url: "https://api-us-east-1.graphcms.com/v2/cku8rnr44423401ze48w1e87c/master",
      },
    }
  ],
};
