import styled from "styled-components";
import { colors } from "@styles/theme/colors";

export const ExhibitionTabContainer = styled.div`
  opacity: ${({ $isHovered, $isOpened }) => ($isHovered || $isOpened ? 1 : 0)};
  transition: opacity 0.9s ease;

  z-index: ${({ $isHovered, $isOpened }) =>
    $isHovered || $isOpened ? 100 : -1};

  width: 100%;
  padding: 40px 0 56px 158px;

  position: fixed;
  top: 50px;

  background-color: ${colors.HID_Grayscale[0]};
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
