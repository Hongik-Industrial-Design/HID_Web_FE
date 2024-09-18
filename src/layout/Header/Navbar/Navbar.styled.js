import styled from "styled-components";
import { colors } from "@styles/theme/colors";

export const NavItemsContainer = styled.ul`
  height: 100%;

  display: flex;
  align-items: center;
  gap: 48px;

  color: ${({ $isHomePage }) =>
    $isHomePage
      ? `${colors.HID_Grayscale[0]}`
      : `${colors.HID_Grayscale[800]}`};

  color: ${({ $isHomePage, $scrolled }) =>
    $isHomePage && $scrolled && `${colors.HID_Grayscale[800]}`};

  color: ${({ $isHomePage, $isHovered, $dropdownOpen }) =>
    $isHomePage &&
    ($isHovered || $dropdownOpen) &&
    `${colors.HID_Grayscale[800]}`};

  transition: color 0.3s ease;

  a {
    height: 100%;
  }
`;

export const NavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  font-weight: ${({ $currentPage }) => ($currentPage ? 600 : 300)};
  color: ${({ $currentPage }) => $currentPage && `${colors.HID_Navy[900]}`};

  cursor: pointer;

  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -4px;
    transform: translateX(-50%);
    width: ${({ $currentPage }) => ($currentPage ? "40px" : "0")};
    height: 4px;
    border-radius: 10px;
    background-color: ${colors.HID_Navy[900]};
    transition: width 0.3s ease;
  }
`;
