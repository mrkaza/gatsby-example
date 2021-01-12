import { css } from '@emotion/react';

export const product = css`
  max-width: 1028px;
  margin: 0 auto;
`;

export const productGrid = css`
  display: grid;
  grid-template-columns: auto;
  column-gap: 24px;

  @media (min-width: 480px) {
    display: flex;
  }
  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: auto auto;
  }
`;

export const productWrapper = css`
  @media (min-width: 600px) {
    display: flex;
    align-items: center;
  }
`;

export const productItemSmall = css`
  display: none;

  @media (min-width: 600px) {
    display: block;
  }
`;

export const productImageContainer = css`
  flex-basis: 568px;
  margin: 0 auto;
  padding: 0;

  @media (min-width: 600px) {
    margin: 0;
    margin-right: 24px;
    margin-bottom: -200px;
    padding: 24px;
    border-radius: 15px;
    background: var(--color-primary);
  }
`;
