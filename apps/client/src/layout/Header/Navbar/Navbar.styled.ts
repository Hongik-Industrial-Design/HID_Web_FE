import styled, { css } from 'styled-components';

import { HeaderTransientProps } from '../Header.types';
import { Link } from 'react-router';

export const NavbarContainer = styled.ul<HeaderTransientProps>`
  width: fit-content;
  height: 100%;

  display: flex;
  align-items: center;

  color: ${({ $isHomePage, theme }) =>
    $isHomePage
      ? theme.colors.HID_Grayscale[0]
      : theme.colors.HID_Grayscale[800]};

  color: ${({ $isHomePage, $scrolled, theme }) =>
    $isHomePage && $scrolled && theme.colors.HID_Grayscale[800]};

  color: ${({
    $isHomePage,
    $isNavbarHovered,
    $isDropdownHover,
    $isSearchTabOpened,
    theme,
  }) =>
    $isHomePage &&
    ($isNavbarHovered || $isDropdownHover || $isSearchTabOpened) &&
    theme.colors.HID_Grayscale[800]};

  transition: color 0.3s ease;
`;

export const NavItem = styled.li<{
  $currentPage?: boolean;
  $disableHighlightBar?: boolean;
}>`
  position: relative;

  width: fit-content;
  height: 100%;
  text-align: center;

  font-size: 1.8rem;
  font-weight: ${({ $currentPage }) => ($currentPage ? 700 : 300)};
  color: ${({ $currentPage, theme }) =>
    $currentPage && theme.colors.HID_Navy[900]};

  transition: font-weight 0.12s ease;

  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);

    width: ${({ $currentPage }) => ($currentPage ? '45px' : '0')};
    height: 4px;

    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.HID_Navy[900]};
    transition: width 0.24s ease;

    ${({ $disableHighlightBar }) =>
      $disableHighlightBar
        ? css`
            opacity: 0;
            transition: opacity 0.15s ease-in-out;
          `
        : css`
            opacity: 1;
            transition: opacity 0.2s ease-in;
          `}; // Dropdown 렌더링 시 언마운트
  }
`;

export const NavItemLink = styled(Link)`
  width: fit-content;
  height: 100%;
  padding: 0 2.4rem;

  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const SearchButton = styled.button`
  width: fit-content;
  height: 100%;
  padding: 0 2.4rem;

  display: inline-flex;
  justify-content: center;
  align-items: center;
`;
