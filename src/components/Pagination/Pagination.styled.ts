import styled, { css } from 'styled-components';
import { colors } from '@styles/theme/colors';

import nextArrow from '@assets/svgs/nextpage-arrow.svg?react';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.28px;
`;

export const PageButton = styled.button`
  min-width: 15px;

  ${({ $currentPage }) =>
    $currentPage
      ? css`
          color: ${colors.HID_Navy[900]};
          font-weight: 600;
        `
      : css`
          color: ${colors.HID_Grayscale[500]};
        `};

  &:hover {
    transform: scale(1.1);
  }

  transition:
    color,
    font-weight 0.1s ease-out,
    transform 0.15s ease-in-out;
`;

export const NextArrow = styled(nextArrow)`
  width: 15px;
  height: 15px;

  cursor: pointer;

  &:hover {
    transform: scale(1.4);
  }

  transition: transform 0.1s ease-in;
`;

export const PreviousArrow = styled(NextArrow)`
  rotate: 180deg;
`;
