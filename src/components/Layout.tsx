import React from 'react';
import { PageProps } from 'gatsby';
import { root } from 'style/layout';
import { Global, css } from '@emotion/react';

export const Layout: React.FC<PageProps> = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <main css={root}>
        <section>{children}</section>
      </main>
    </>
  );
};
