import styled from "styled-components";
import { colors } from "@styles/theme/colors";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 12px 158px;

  background-color: ${({ $isHomePage }) =>
    $isHomePage ? "#1A1A1A4D" : "#ebebeb4d"};

  background-color: ${({ $isHomePage, $scrolled }) =>
    $isHomePage && $scrolled && "#ebebeb4d"};

  background-color: ${({ $isHovered }) =>
    $isHovered && `${colors.HID_Grayscale[0]}`};

  transition: background-color 0.3s ease;
`;

export const MainLogo = styled.img`
  width: 90px;
  height: 17.4px;

  cursor: pointer;
`;
