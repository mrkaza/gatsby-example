/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query Products {
      allProductsJson {
        nodes {
          askingPrice
          avgNetRevenue
          id
          monetization
          multiple
          niche
          range
          siteAge
          title
          url
        }
      }
    }
  `);

  result.data.allProductsJson.nodes.forEach((product) => {
    createPage({
      path: `/products/${slugify(product.title)}-˘${product.id}`,
      component: path.resolve(`./src/templates/ProductDetails.tsx`),
      context: {
        product,
      },
    });
  });
};
