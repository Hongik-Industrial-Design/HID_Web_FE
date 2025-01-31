import styled from 'styled-components';
import { colors } from '@styles/theme/colors';

import { DropdownTransientProps } from './Dropdown.types';

export const DropdownBackground = styled.div<DropdownTransientProps>`
  opacity: ${({ $isNavbarHovered, $isDropdownOpen }) =>
    $isNavbarHovered || $isDropdownOpen ? 1 : 0};
  transition: opacity 0.5s ease;

  width: 100%;
  height: 100vh;

  background: rgba(217, 217, 217, 0.3);
  backdrop-filter: blur(8px);

  position: fixed;
  top: 0;
  z-index: ${({ $isNavbarHovered, $isDropdownOpen }) =>
    $isNavbarHovered || $isDropdownOpen ? 10 : -1};
`;

export const DropdownContainer = styled.div<DropdownTransientProps>`
  width: 100%;

  position: fixed;
  top: 50px;

  opacity: ${({ $isNavbarHovered, $isDropdownOpen }) =>
    $isNavbarHovered || $isDropdownOpen ? 1 : 0};
  transition: opacity 0.5s ease;

  z-index: ${({ $isNavbarHovered, $isDropdownOpen }) =>
    $isNavbarHovered || $isDropdownOpen ? 99 : -1};

  background-color: ${colors.HID_Grayscale[0]};
`;
