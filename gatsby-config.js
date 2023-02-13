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
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://creativelab.us10.list-manage.com/subscribe/post?u=62931e454decc9fa7b536fbe7&amp;id=6f57c47793", // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {},
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
