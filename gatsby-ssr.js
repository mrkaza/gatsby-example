/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react';
import { Layout } from 'components';
import { globals } from 'style';

import { Global } from '@emotion/react';

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>
    <Global styles={globals} />
    {element}
  </Layout>
);
