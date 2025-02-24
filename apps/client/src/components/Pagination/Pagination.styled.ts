import styled, { css } from 'styled-components';

import nextArrow from '@assets/svgs/notice/nextpage-arrow.svg?react';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

export const PageButton = styled.button<{ $currentPage: boolean }>`
  min-width: 1.5rem;

  ${({ theme }) => theme.fontStyles.SubTitle2};
  font-size: 2.2rem;
  color: ${({ theme }) => theme.colors.HID_Grayscale[500]};

  ${({ $currentPage }) =>
    $currentPage &&
    css`
      color: ${({ theme }) => theme.colors.HID_Navy[900]};
      font-weight: 600;
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
  width: 1.5rem;
  height: 1.5rem;

  cursor: pointer;

  &:hover {
    transform: scale(1.4);
  }

  transition: transform 0.1s ease-in;
`;

export const PreviousArrow = styled(NextArrow)`
  rotate: 180deg;
`;
