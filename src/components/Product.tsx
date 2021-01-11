import React from 'react';
import { PageProps } from 'gatsby';
import { Layout } from './layout';
import { productGrid, productWrapper } from 'style';

export const Product: React.FC<PageProps> = ({ data, ...rest }) => {
  console.log(data);

  return (
    <Layout>
      <h1>{rest.title}</h1>
      <p>
        {rest.url} | {rest.niche}
      </p>
      <hr />
      <div css={productWrapper}>
        <div>
          <img src="../images/gatsby-astronaut.png" alt="" />
        </div>
        <div css={productGrid}>
          <div>
            <h1>Asking Price</h1>
            <p>{rest.askingPrice}</p>
          </div>
          <div>
            <h1>Avg net revenue</h1>
            <p>{rest.avgNetRevenue}</p>
          </div>
          <div>
            <h1>Range</h1>
            <p>{rest.range}</p>
          </div>
          <div>
            <h1>Monetization</h1>
            <p>{rest.monetization}</p>
          </div>
          <div>
            <h1>Site age</h1>
            <p>{rest.siteAge}</p>
          </div>
          <div>
            <h1>Multiple</h1>
            <p>{rest.multiple}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
