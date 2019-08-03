module.exports = {
  siteMetadata: {
    title: 'Hope in Source — A podcast about faith and open source — with Nadia Eghbal & Henry Zhu',
    author: 'Nadia Eghbal & Henry Zhu',
    description: 'What are the parallels between faith and open source software? Join Nadia and Henry for an off-the-cuff conversation between friends.',
    gitOrg: 'hzoo',
    siteUrl: 'https://hopeinsource.com',
    social: {
      twitter: '@left_pad',
    },
    feed: {
      rss: 'https://feeds.simplecast.com/9H3Jd25O',
      google: 'https://www.google.com/podcasts?feed=aHR0cHM6Ly9yc3Muc2ltcGxlY2FzdC5jb20vcG9kY2FzdHMvNzA0OS9yc3M%3D',
      apple: 'https://itunes.apple.com/us/podcast/hope-in-source/id1437677655',
      spotify: 'https://open.spotify.com/show/5EXwiyKzPrrucncKyrHy0B',
    },
  },
  plugins: [
    {
      resolve: "gatsby-theme-podcast",
      options: {
        // rssSource: "https://feeds.transistor.fm/maintainers-anonymous"
        rssSource: "https://anchor.fm/s/c157438/podcast/rss"
      }
    }
  ]
};
