import styled from 'styled-components';
import { Link } from 'react-router';

import { HeaderTransientProps } from './Header.types';

export const HeaderContainer = styled.header<HeaderTransientProps>`
  position: fixed;
  top: 0;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4.8rem;

  width: 100%;
  height: 70px;
  padding: 0 10.8rem 0 15.8rem;

  background-color: ${({ $isHomePage }) =>
    $isHomePage ? '#1A1A1A3d' : '#ebebeb3d'};

  background-color: ${({ $isHomePage, $scrolled }) =>
    $isHomePage && $scrolled && '#ebebeb3d'};

  background-color: ${({
    $isNavbarHovered,
    $isDropdownHover,
    $isSearchTabOpened,
    theme,
  }) =>
    ($isNavbarHovered || $isDropdownHover || $isSearchTabOpened) &&
    theme.colors.HID_Grayscale[0]};

  backdrop-filter: blur(4px);

  transition: background-color 0.3s ease-in-out;
`;

export const HomeLogo = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: fit-content;
  height: fit-content;
`;
