import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export const Image = ({ ...rest }) => {
  //   const data = useStaticQuery(graphql`
  //     query {
  //       productImage: file(relativePath: { eq: 'gatsby-astronaut.png' }) {
  //         childImageSharp {
  //           fluid(maxWidth: 514) {
  //             ...GatsbyImageSharpFluid
  //           }
  //         }
  //       }
  //     }
  //   `);

  const data = useStaticQuery(graphql);

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>;
  }

  return <Img fluid={data.productImage.childImageSharp.fluid} />;
};
