import React from 'react';
import { Layout } from './Layout';
import * as product from 'style/product';
import { Image } from './Image';

export interface ProductType {
  id?: string;
  title: string;
  url: string;
  niche: string;
  askingPrice: string;
  avgNetRevenue: string;
  range: string;
  monetization: string;
  siteAge: string;
  multiple: string;
}

export const Product: React.FC<ProductType> = ({
  title,
  url,
  niche,
  askingPrice,
  avgNetRevenue,
  range,
  monetization,
  siteAge,
  multiple,
}) => {
  return (
    <Layout>
      <h1>{title}</h1>
      <p>
        {url} | {niche}
      </p>
      <hr />
      <div css={product.productWrapper}>
        <div>
          <Image />
        </div>
        <div css={product.productGrid}>
          <div>
            <h1>Asking Price</h1>
            <p>{askingPrice}</p>
          </div>
          <div>
            <h1>Avg net revenue</h1>
            <p>{avgNetRevenue}</p>
          </div>
          <div css={product.productItemMedium}>
            <h1>Range</h1>
            <p>{range}</p>
          </div>
          <div css={product.productItemSmall}>
            <h1>Monetization</h1>
            <p>{monetization}</p>
          </div>
          <div css={product.productItemSmall}>
            <h1>Site age</h1>
            <p>{siteAge}</p>
          </div>
          <div css={product.productItemSmall}>
            <h1>Multiple</h1>
            <p>{multiple}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
