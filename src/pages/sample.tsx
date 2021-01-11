import React from 'react';
import { Product } from 'components';

const Sample: React.FC = () => {
  return (
    <Product
      title="heej"
      url="sample.ulr"
      niche="sample niche"
      askingPrice="sample price"
      avgNetRevenue="sample revenue"
      range="sample range"
      monetization="sample monetization"
      siteAge="sample age"
      multiple="sample multiple"
    ></Product>
  );
};

export default Sample;
