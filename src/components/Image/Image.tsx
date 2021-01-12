import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      images: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 568) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  console.log(data);

  if (!data?.images?.childImageSharp?.fluid) {
    return <div>Picture not found</div>;
  }

  return <Img {...data.images.childImageSharp} />;
};
