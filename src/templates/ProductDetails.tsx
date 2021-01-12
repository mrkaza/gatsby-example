import { PageProps } from 'gatsby';
import React from 'react';
import { Product, ProductType } from 'components';

const ProductDetails: React.FC<
  PageProps<unknown, { product: ProductType }>
> = ({ pageContext: { product } }) => {
  const {
    title,
    url,
    niche,
    askingPrice,
    avgNetRevenue,
    range,
    monetization,
    siteAge,
    multiple,
  } = product;

  return (
    <Product
      title={title}
      url={url}
      niche={niche}
      askingPrice={askingPrice}
      avgNetRevenue={avgNetRevenue}
      range={range}
      monetization={monetization}
      siteAge={siteAge}
      multiple={multiple}
    ></Product>
  );
};

export default ProductDetails;
