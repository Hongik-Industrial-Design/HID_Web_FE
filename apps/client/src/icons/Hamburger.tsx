import styled from 'styled-components';

import hamburgerIcon from '@assets/svgs/hamburger.svg?react';

export const HamburgerIcon = styled(hamburgerIcon)<{ $isHomePage: boolean }>`
  width: 2.8rem;
  height: 2.8rem;

  path {
    stroke: ${({ $isHomePage, theme }) =>
      $isHomePage
        ? theme.colors.HID_Grayscale[0]
        : theme.colors.HID_Grayscale[800]};
  }

  svg {
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;
