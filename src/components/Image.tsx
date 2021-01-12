import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export const Image = () => {
  // const path = 'gatsby-astronaut.png';

  const data = useStaticQuery(graphql`
    query Images {
      file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid {
            srcWebp
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  console.log(data.file.childImageSharp.fluid);

  if (!data?.file?.childImageSharp?.fluid) {
    return <div>Picture not found</div>;
  }

  return <Img fluid={data.file.childImageSharp.fluid} />;

  // return <div>heeej</div>;
};
