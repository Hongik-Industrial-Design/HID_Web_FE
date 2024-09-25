import styled from "styled-components";
import { colors } from "@styles/theme/colors";

import LeftArrow from "@assets/arrows/left-arrow_full.svg?react";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  height: 40px;
  padding: 8px 16px;

  background-color: #d2d2d7a3;
  border-radius: 100px;

  transition: background-color 0.4s, transform 0.15s;

  cursor: pointer;

  &:hover {
    background-color: transparent;
  }

  &:active {
    transform: translateY(3px);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #7488c8;
    border-radius: 100px;
    transform: translateX(20px) scale(0.1);
    opacity: 0;
    z-index: -1;
    transition: transform 0.3s, opacity 0.3s, background-color 0.3s;
  }

  &:hover::after {
    opacity: 1;
    transform: scale(1);
  }

  &:active::after {
    background-color: ${colors.HID_Navy[900]};
  }
`;

export const GoToListText = styled.div`
  color: ${({ $isHovered }) =>
    $isHovered ? `${colors.HID_Grayscale[0]}` : "#0000008F"};

  transition: color 0.4s;

  font-style: normal;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
`;

export const StyledLeftArrow = styled(LeftArrow)`
  width: 24px;
  height: 24px;

  fill: ${({ $isHovered }) =>
    $isHovered ? `${colors.HID_Grayscale[0]}` : "#0000008F"};

  transition: fill 0.5s;
`;
