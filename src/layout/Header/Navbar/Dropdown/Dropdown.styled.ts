import styled from 'styled-components';
import { colors } from '@styles/theme/colors';
import { DropdownProps } from './dropdownProps';

export const DropdownBackground = styled.div<DropdownProps>`
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

export const DropdownContainer = styled.div<DropdownProps>`
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
