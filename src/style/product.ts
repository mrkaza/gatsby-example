import { css } from '@emotion/react';

export const productGrid = css`
  display: grid;
  grid-template-columns: auto;
  column-gap: 24px;

  @media (min-width: 480px) {
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

export const productItemMedium = css`
  display: none;

  @media (max-width: 480px) {
    display: block;
  }

  @media (min-width: 600px) {
    display: block;
  }
`;

export const productImageContainer = css`
  flex-basis: 568px;
  margin-right: 24px;

  @media (max-width: 600px) {
    margin: 0 auto;
  }
`;
