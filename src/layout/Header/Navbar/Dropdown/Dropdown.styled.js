import styled from "styled-components";
import { colors } from "@styles/theme/colors";

export const DropdownBackground = styled.div`
  opacity: ${({ $isHovered, $isOpened }) => ($isHovered || $isOpened ? 1 : 0)};
  transition: opacity 0.5s ease;

  width: 100%;
  height: 100vh;

  background: rgba(217, 217, 217, 0.3);
  backdrop-filter: blur(8px);

  position: fixed;
  top: 0;
  z-index: ${({ $isHovered, $isOpened }) =>
    $isHovered || $isOpened ? 10 : -1};
`;

export const DropdownContainer = styled.div`
  width: 100%;

  position: fixed;
  top: 50px;

  opacity: ${({ $isHovered, $isOpened }) => ($isHovered || $isOpened ? 1 : 0)};
  transition: opacity 0.5s ease;

  z-index: ${({ $isHovered, $isOpened }) =>
    $isHovered || $isOpened ? 99 : -1};
  
  background-color: ${colors.HID_Grayscale[0]};
`;
