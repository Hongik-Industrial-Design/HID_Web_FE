import styled from "styled-components";
import { colors } from "@styles/theme/colors";

export const DropdownBackground = styled.div`
  opacity: ${({ $isHovered }) => ($isHovered ? 1 : 0)};
  transition: opacity 0.3s ease;

  width: 100%;
  height: 100vh;

  background: rgba(217, 217, 217, 0.3);
  backdrop-filter: blur(8px);

  position: absolute;
  top: 0;
  z-index: ${({ $isHovered }) => ($isHovered ? 10 : -1)};
`;

export const DropdownContainer = styled.div`
  opacity: ${({ $isHovered }) => ($isHovered ? 1 : 0)};
  transition: opacity 0.3s ease;
  width: 100%;
  height: 392px;
  position: absolute;
  top: 49px;
  z-index: ${({ $isHovered }) => ($isHovered ? 99 : -1)};
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
  font-style: normal;
  font-size: 24px;
  font-weight: 300;
  line-height: normal;

  color: ${colors.HID_Grayscale[800]};
`;
