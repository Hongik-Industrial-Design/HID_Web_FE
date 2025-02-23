import styled from 'styled-components';

import magnifyGlass from '@assets/svgs/search/maginfy-glass.svg?react';

export const MagnifyGlassIcon = styled(magnifyGlass)<{
  $isHomePage: boolean;
  $scrolled: boolean;
  $isSearchTabOpened: boolean;
}>`
  transform-origin: center;

  path {
    fill: ${({ $isHomePage, theme }) =>
      $isHomePage
        ? theme.colors.HID_Grayscale[0]
        : theme.colors.HID_Grayscale[800]};

    fill: ${({ $isHomePage, $scrolled, $isSearchTabOpened, theme }) =>
      $isHomePage &&
      ($scrolled || $isSearchTabOpened) &&
      theme.colors.HID_Grayscale[800]};

    transition: fill 0.3s ease;
  }
`;

export const SmallSearchIcon = styled(magnifyGlass)<{ $isFocused: boolean }>`
  width: 1.4rem;
  height: fit-content;

  cursor: pointer;

  path {
    fill: ${({ theme }) => theme.colors.HID_Grayscale[500]};

    fill: ${({ $isFocused, theme }) =>
      $isFocused && theme.colors.HID_Navy[900]};

    transition: fill 0.2s ease-in-out;
  }
`;

// GNB 내 SearchTab에 사용
export const SearchIcon = styled(magnifyGlass)`
  width: 2.4rem;
  height: fit-content;

  path {
    fill: ${({ theme }) => theme.colors.HID_Grayscale[500]};
  }
`;
