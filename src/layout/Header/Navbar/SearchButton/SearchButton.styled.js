import styled from "styled-components";
import { colors } from "@styles/theme/colors";

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  cursor: pointer;
`;

export const MagnifyHandle = styled.div`
  width: 8px;
  height: 2px;

  position: absolute;
  top: 13.2px;
  left: 14px;

  background-color: ${colors.HID_Grayscale[800]};

  transform: rotate(45deg);
  transform-origin: top left;
`;
