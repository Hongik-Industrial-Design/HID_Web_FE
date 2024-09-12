import styled from "styled-components";
import { colors } from "@styles/theme/colors";

export const NavItemsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;

  color: ${({ $isHomePage }) =>
    $isHomePage ? "#FFFFFF" : `${colors.HID_Grayscale[800]}`};
`;

export const NavItem = styled.p`
  font-weight: ${({ $isActive }) => ($isActive ? 600 : 300)};

  color: ${({ $isActive }) => $isActive && `${colors.HID_Navy[900]}`};

  cursor: pointer;

  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -16px;
    transform: translateX(-50%);
    width: ${({ $isActive }) => ($isActive ? "40px" : "0")};
    height: 4px;
    border-radius: 10px;
    background-color: ${colors.HID_Navy[900]};
    transition: width 0.3s ease;
  }
`;
