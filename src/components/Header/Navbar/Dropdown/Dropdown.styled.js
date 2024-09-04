import { colors } from "@styles/theme/colors";
import styled from "styled-components";

export const DropdownContainer = styled.div`
  opacity: ${({ $isHovered }) => ($isHovered ? 1 : 0)};
  transition: opacity 0.3s ease;
  width: 1920px;
  height: 392px;
  position: absolute;
  top: 49px;
  background-color: ${colors.HID_Grayscale[0]};
`;

export const Title = styled.h2`
  position: relative;
  top: 40px;
  left: 158px;

  ${({ theme }) => theme.fontStyles.Header2}
  color: ${colors.HID_Grayscale[800]};

  span {
    color: #ffc700;
  }
`;

export const Timeline = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  flex-wrap: wrap-reverse;
  gap: 24px;
  height: 216px;

  position: absolute;
  top: 120px;
  left: 158px;
`;

export const Year = styled.p`
  color: ${colors.HID_Grayscale[800]};
  font-size: 24px;
  font-weight: 300;
`;
