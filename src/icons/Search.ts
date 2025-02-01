import styled from 'styled-components';

import magnifyGlass from '@assets/icons/svgs/search/maginfy-glass.svg?react';

export const MagnifyGlassIcon = styled(magnifyGlass)<{
  $isHomePage: boolean;
  $scrolled: boolean;
}>`
  transform-origin: center;

  path {
    fill: ${({ $isHomePage, theme }) =>
      $isHomePage
        ? theme.colors.HID_Grayscale[0]
        : theme.colors.HID_Grayscale[800]};

    fill: ${({ $isHomePage, $scrolled, theme }) =>
      $isHomePage && $scrolled && theme.colors.HID_Grayscale[800]};

    transition: fill 0.3s ease;
  }
`;
