module.exports = {
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Liu Jian Mao Cao',
          'ABeeZee',
          'Roboto',
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts/`,
      },
    },
  ],
};
