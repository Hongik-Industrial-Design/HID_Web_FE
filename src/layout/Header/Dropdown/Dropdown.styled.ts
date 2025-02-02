import styled from 'styled-components';

import { DropdownTransientProps } from './Dropdown.types';

export const DropdownBackground = styled.div<DropdownTransientProps>`
  position: fixed;
  top: 0;
  z-index: -1;
  z-index: ${({ $isNavbarHovered, $isDropdownOpen }) =>
    ($isNavbarHovered || $isDropdownOpen) && 10};

  width: 100vw;
  height: 100vh;

  background-color: rgba(217, 217, 217, 0.3);
  backdrop-filter: blur(8px);

  transition: opacity 0.2s ease-in;

  opacity: ${({ $isNavbarHovered, $isDropdownOpen }) =>
    $isNavbarHovered || $isDropdownOpen ? 1 : 0};
`;

export const DropdownContainer = styled.div<DropdownTransientProps>`
  position: fixed;
  top: 70px;
  z-index: -1;

  width: 100%;
  height: fit-content;

  background-color: ${({ theme }) => theme.colors.HID_Grayscale[0]};

  transition: opacity 0.25s ease-out;

  opacity: ${({ $isNavbarHovered, $isDropdownOpen }) =>
    $isNavbarHovered || $isDropdownOpen ? 1 : 0};

  z-index: ${({ $isNavbarHovered, $isDropdownOpen }) =>
    ($isNavbarHovered || $isDropdownOpen) && 100};
`;
