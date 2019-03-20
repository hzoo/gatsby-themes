module.exports = {
  siteMetadata: {
    title:
      "Hope in Source — A podcast about faith and open source — with Nadia Eghbal & Henry Zhu",
    author: "Nadia Eghbal & Henry Zhu",
    description:
      "What are the parallels between faith and open source software? Join Nadia and Henry for an off-the-cuff conversation between friends.",
    gitOrg: "hzoo",
    siteUrl: "hopeinsource.com",
    social: {
      twitter: "@left_pad"
    },
    sources: [
      {
        name: "RSS",
        url: "https://feeds.simplecast.com/9H3Jd25O"
      },
      {
        name: "Google",
        url:
          "https://www.google.com/podcasts?feed=aHR0cHM6Ly9yc3Muc2ltcGxlY2FzdC5jb20vcG9kY2FzdHMvNzA0OS9yc3M%3D"
      },
      {
        name: "Apple",
        url: "https://itunes.apple.com/us/podcast/hope-in-source/id1437677655"
      },
      {
        name: "Spotify",
        url: "https://open.spotify.com/show/5EXwiyKzPrrucncKyrHy0B"
      },
      {
        name: "GitHub",
        url: "https://github.com/hzoo/hopeinsource.com"
      }
    ],
    // Tweet ids
    praise: [
      `1059181425184755713`,
      `1052646871154548738`,
      `1053342917014753281`
    ]
  },
  plugins: [
    // Load the local files only to create the content schema & load theme
    // demo content.
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "theme-demo-content",
        path: `${__dirname}/content`
      }
    },

    /*
     * Load the `content` directory to load from the content folder
     * of the site using this theme. This is where the actual content will be
     * loaded from for creating pages.
     */
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "site-content",
        path: "content"
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: require.resolve(`./src/utils/typography`)
      }
    },
    {
      resolve: "gatsby-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/Layout.js")
        }
      }
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/pages`
      }
    }
  ]
};
