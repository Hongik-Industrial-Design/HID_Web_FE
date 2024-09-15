import styled from "styled-components";
import { colors } from "@styles/theme/colors";

export const DropdownBackground = styled.div`
  opacity: ${({ $isHovered, $isOpened }) => ($isHovered || $isOpened ? 1 : 0)};
  transition: opacity 0.3s ease;

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

  padding: 40px 0 56px 158px;

  opacity: ${({ $isHovered, $isOpened }) => ($isHovered || $isOpened ? 1 : 0)};
  transition: opacity 0.3s ease;

  z-index: ${({ $isHovered, $isOpened }) =>
    $isHovered || $isOpened ? 99 : -1};
  background-color: ${colors.HID_Grayscale[0]};

  position: fixed;
  top: 49px;
`;

export const Title = styled.h2`
  margin-bottom: 40px;

  ${({ theme }) => theme.fontStyles.Header2}
  color: ${colors.HID_Grayscale[800]};

  span {
    color: #ffc700;
  }
`;

export const Timeline = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(3, 54px);
  grid-template-rows: repeat(5, 1fr);

  justify-items: center;
  align-items: center;

  column-gap: 108px;
  row-gap: 24px;
`;

export const Year = styled.p`
  font-style: normal;
  font-size: 24px;
  font-weight: 300;
  line-height: normal;

  color: ${colors.HID_Grayscale[800]};

  cursor: pointer;
`;
