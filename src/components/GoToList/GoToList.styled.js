import styled from "styled-components";
import { colors } from "@styles/theme/colors";

export const ButtonContainer = styled.div`
  ${({ $isHovered }) =>
    $isHovered
      ? `background-color: #7488c8; color: ${colors.HID_Grayscale[0]};`
      : "background-color: #D2D2D7A3; color: #0000008F;"};

  ${({ $isActive }) =>
    $isActive &&
    `background-color: ${colors.HID_Navy[900]}; color: ${colors.HID_Grayscale[0]};`}

  transition: color, background-color 0.18s ease;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 40px;
  padding: 8px 16px;

  border-radius: 100px;

  cursor: pointer;

  .left-arrow {
    ${({ $isHovered }) =>
      $isHovered ? `fill: ${colors.HID_Grayscale[0]};` : "fill: #0000008F;"};

    width: 24px;
    height: 24px;
  }

  .text {
    ${({ $isHovered }) =>
      $isHovered ? `color: ${colors.HID_Grayscale[0]};` : "color: #0000008F;"};

    ${({ $isActive }) =>
      $isActive &&
      `color: ${colors.HID_Grayscale[0]};`}

    transition: color 0.2s ease;

    font-style: normal;
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
  }
`;
