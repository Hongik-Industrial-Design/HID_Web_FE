import styled, { css } from 'styled-components';

import hamburgerIcon from '@assets/svgs/hamburger.svg?react';

export const HamburgerIcon = styled(hamburgerIcon)<{
  $isActive: boolean;
  $isHomePage: boolean;
}>`
  width: 3.2rem;
  height: 3.2rem;

  #line-top {
    transform-origin: center;
    transform-box: fill-box;

    ${({ $isActive }) =>
      $isActive &&
      css`
        transform: translateY(6px) rotate(45deg);
      `}
  }

  #line-middle {
    stroke-dasharray: 40 82;

    ${({ $isActive }) =>
      $isActive &&
      css`
        stroke-dasharray: 17 82;
        stroke-dashoffset: -48px;
      `};
  }

  #line-bottom {
    transform-origin: center;
    transform-box: fill-box;

    ${({ $isActive }) =>
      $isActive &&
      css`
        transform: translateY(-6px) rotate(-45deg);
      `}
  }

  path {
    transition:
      transform 0.3s ease-in-out,
      stroke-dasharray 400ms,
      stroke-dashoffset 400ms;

    stroke: ${({ $isHomePage, theme }) =>
      $isHomePage
        ? theme.colors.HID_Grayscale[0]
        : theme.colors.HID_Grayscale[800]};
  }
`;
