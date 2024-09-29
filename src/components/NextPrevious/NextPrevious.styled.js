import styled from "styled-components";
import { colors } from "@styles/theme/colors";

import leftArrow from "@assets/arrows/left-arrow.svg?react";
import rightArrow from "@assets/arrows/right-arrow.svg?react";

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const BaseArrowButton = styled.button`
  width: 40px;
  height: 40px;
  padding: 2px;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 36px;

  background: rgba(210, 210, 215, 0.64);

  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    height: 100%;
    transition: margin-left 0.2s ease, box-shadow 0.25s ease;
  }

  &:disabled {
    opacity: 0.42;
    cursor: not-allowed;
    pointer-events: none;
    transform: none;
  }
`;

export const LeftArrowButton = styled(BaseArrowButton)`
  &::before {
    margin-left: 100%;
    box-shadow: inset 0 40px 0 0 #7488c8;
  }

  &:hover::before {
    margin-left: 0;
  }

  &:active::before {
    box-shadow: inset 0 40px 0 0 ${colors.HID_Navy[900]};
  }
`;

export const RightArrowButton = styled(BaseArrowButton)`
  &::before {
    margin-left: -100%;
    box-shadow: inset 0 0 0 40px #7488c8;
  }

  &:hover::before {
    margin-left: 0;
  }

  &:active::before {
    box-shadow: inset 0 40px 0 0 ${colors.HID_Navy[900]};
  }
`;

export const StyledLeftArrow = styled(leftArrow)`
  fill: ${({ $isHovered }) =>
    $isHovered ? `${colors.HID_Grayscale[0]}` : "#0000008f"};
  z-index: 10;
  transition: fill 0.3s ease;
`;

export const StyledRightArrow = styled(rightArrow)`
  fill: ${({ $isHovered }) =>
    $isHovered ? `${colors.HID_Grayscale[0]}` : "#0000008f"};
  z-index: 10;
  transition: fill 0.3s ease;
`;
