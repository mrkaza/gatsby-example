/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
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
