import styled from "styled-components";
import { colors } from "@styles/theme/colors";

import MagnifyLens from "@assets/circle.svg?react";

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  cursor: pointer;
`;

export const StyledMagnifyLens = styled(MagnifyLens)`
  stroke: ${({ $isHomePage }) =>
    $isHomePage
      ? `${colors.HID_Grayscale[0]}`
      : `${colors.HID_Grayscale[800]}`};

  stroke: ${({ $isHomePage, $scrolled }) =>
    $isHomePage && $scrolled && `${colors.HID_Grayscale[800]}`};

  transition: stroke 0.3s ease;
`;

export const MagnifyHandle = styled.div`
  width: 8px;
  height: 2px;

  position: absolute;
  top: 13.2px;
  left: 14px;

  background-color: ${({ $isHomePage }) =>
    $isHomePage
      ? `${colors.HID_Grayscale[0]}`
      : `${colors.HID_Grayscale[800]}`};

  background-color: ${({ $isHomePage, $scrolled }) =>
    $isHomePage && $scrolled && `${colors.HID_Grayscale[800]}`};

  transition: background-color 0.3s ease;

  transform: rotate(45deg);
  transform-origin: top left;
`;
