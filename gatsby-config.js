/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Poppins`,
              variants: [`400`],
            },
            {
              family: `Roboto Mono`,
              variants: [`400`, `700`],
            },
            {
              family: `Raleway`,
              variants: [`400`, `600`, `500`, `700`],
            },
            {
              family: `Roboto`,
              subsets: [`latin`],
            },
          ],
        },
      },
    },
  ],
};
