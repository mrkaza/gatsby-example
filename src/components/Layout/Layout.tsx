import React from 'react';
import { root } from './Layout.styles';

export const Layout: React.FC = ({ children }) => {
  return <main css={root}>{children}</main>;
};
