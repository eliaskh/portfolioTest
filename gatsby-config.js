module.exports = {
  flags: {
    PRESERVE_WEBPACK_CACHE: false,
    PRESERVE_FILE_DOWNLOAD_CACHE: false,
  },
  siteMetadata: {
    title: `Software Development Solution`,
    description: `חברה לבניית אתרים ואפליקציות מובילה בישראל, עם צוות קריאייטיב יצירתי ומנוסה, צוות פיתוח משולב עם יכולות גבוהות בביצוע ומציאת פתרונות לכל צרכי המוצר`,
    author: `Elias khshaiboun`,
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-breakpoints",
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "zxx",
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://eliasportfoliotest.herokuapp.com`,
        queryLimit: 1000,
        contentTypes: [
          "top-features",
          "our-features",
          "projects",
          "blogs",
          "services",
        ],
        singleTypes: [
          "banner",
          "why-choose-us",
          "it-startup-banner",
          "cloud-hosting-services",
          "development-service",
          "team",
          "our-awesome-team-slider",
          "fun-facts",
          "pricing-style-one",
          "partner",
          "feedback",
          "our-features-header",
          "it-top-features",
          "our-recent-works-header",
          "it-startup-banner-2",
          "our-services-header",
          "blog-header",
          "site-logo",
        ],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
