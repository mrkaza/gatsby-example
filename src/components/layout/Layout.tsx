import React from 'react';
import { PageProps } from 'gatsby';
import { root } from './Layout.style';

export const Layout: React.FC<PageProps> = ({ children }) => {
  return <div css={root}>{children}</div>;
};
