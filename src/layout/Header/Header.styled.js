import styled from "styled-components";
import { colors } from "@styles/theme/colors";

import HIDHomeLogo from "@assets/HID-home-logo.svg?react";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 50px;

  padding: 0 158px;

  background-color: ${({ $isHomePage }) =>
    $isHomePage ? "#1A1A1A4D" : "#ebebeb4d"};

  background-color: ${({ $isHomePage, $scrolled }) =>
    $isHomePage && $scrolled && "#ebebeb4d"};

  background-color: ${({ $isHovered, $dropdownOpen }) =>
    ($isHovered || $dropdownOpen) && `${colors.HID_Grayscale[0]}`};

  transition: background-color 0.5s ease;
`;

export const StyledHIDHomeLogo = styled(HIDHomeLogo)`
  width: 90px;
  height: 17.4px;

  cursor: pointer;

  path {
    fill: ${({ $isHomePage }) =>
      $isHomePage
        ? `${colors.HID_Grayscale[0]}`
        : `${colors.HID_Grayscale[800]}`};

    fill: ${({ $isHomePage, $scrolled }) =>
      $isHomePage && $scrolled && `${colors.HID_Grayscale[800]}`};

    fill: ${({ $isHomePage, $isHovered, $dropdownOpen }) =>
      $isHomePage &&
      ($isHovered || $dropdownOpen) &&
      `${colors.HID_Grayscale[800]}`};

    transition: fill 0.3s ease;
  }

  #Vector_2 {
    fill: ${({ $isHomePage }) =>
      $isHomePage ? `${colors.HID_Grayscale[0]}` : `${colors.HID_Navy[900]}`};

    fill: ${({ $isHomePage, $scrolled }) =>
      $isHomePage && $scrolled && `${colors.HID_Navy[900]}`};

    fill: ${({ $isHomePage, $isHovered, $dropdownOpen }) =>
      $isHomePage &&
      ($isHovered || $dropdownOpen) &&
      `${colors.HID_Navy[900]}`};

    transition: fill 0.3s ease;
  }
`;
