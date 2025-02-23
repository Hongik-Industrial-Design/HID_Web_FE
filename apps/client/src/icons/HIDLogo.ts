import styled from 'styled-components';

import HIDlogo from '@assets/svgs/logos/HID-logo.svg?react';

export const HeaderHIDLogo = styled(HIDlogo)<{
  $isHomePage: boolean;
  $scrolled: boolean;
  $isNavbarHovered: boolean;
  $isDropdownHover: boolean;
  $isSearchTabOpened: boolean;
}>`
  width: 100px;
  height: fit-content;

  cursor: pointer;

  path {
    fill: ${({ $isHomePage, theme }) =>
      $isHomePage
        ? theme.colors.HID_Grayscale[0]
        : theme.colors.HID_Grayscale[800]};

    fill: ${({ $isHomePage, $scrolled, theme }) =>
      $isHomePage && $scrolled && theme.colors.HID_Grayscale[800]};

    fill: ${({
      $isHomePage,
      $isNavbarHovered,
      $isDropdownHover,
      $isSearchTabOpened,
      theme,
    }) =>
      $isHomePage &&
      ($isNavbarHovered || $isDropdownHover || $isSearchTabOpened) &&
      theme.colors.HID_Grayscale[800]};

    transition: fill 0.3s ease;
  }

  #Vector_2 {
    fill: ${({ $isHomePage, theme }) =>
      $isHomePage ? theme.colors.HID_Grayscale[0] : theme.colors.HID_Navy[900]};

    fill: ${({ $isHomePage, $scrolled, theme }) =>
      $isHomePage && $scrolled && theme.colors.HID_Navy[900]};

    fill: ${({
      $isHomePage,
      $isNavbarHovered,
      $isDropdownHover,
      $isSearchTabOpened,
      theme,
    }) =>
      $isHomePage &&
      ($isNavbarHovered || $isDropdownHover || $isSearchTabOpened) &&
      theme.colors.HID_Navy[900]};

    transition: fill 0.3s ease;
  }
`;
