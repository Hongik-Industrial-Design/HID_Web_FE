import styled, { css } from 'styled-components';

import leftArrow from '@assets/svgs/arrows/left-arrow.svg?react';
import rightArrow from '@assets/svgs/arrows/right-arrow.svg?react';

// NextPrevious & SliderNavigation 컴포넌트 내 Arrow Icon
export const LeftArrow = styled(leftArrow)<{ $isHovered: boolean }>`
  path {
    ${({ $isHovered, theme }) =>
      $isHovered &&
      css`
        fill: ${theme.colors.HID_Grayscale[0]};
        fill-opacity: 1;
      `};

    transition: fill 0.3s ease;
  }

  z-index: 10; // 애니메이션을 위한 포지셔닝
`;

export const RightArrow = styled(rightArrow)<{ $isHovered: boolean }>`
  path {
    ${({ $isHovered, theme }) =>
      $isHovered &&
      css`
        fill: ${theme.colors.HID_Grayscale[0]};
        fill-opacity: 1;
      `};

    transition: fill 0.3s ease;
  }

  z-index: 10; // 애니메이션을 위한 포지셔닝
`;
