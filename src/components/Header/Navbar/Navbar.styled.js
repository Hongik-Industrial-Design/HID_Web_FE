import styled from "styled-components";

export const NavItemsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
`;

export const NavItem = styled.p`
  font-weight: ${({ $isActive }) => ($isActive ? 600 : 300)};
  color: ${({ $isActive }) => ($isActive ? "#09287A" : "#262626")};
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
    background-color: #09287a;
    transition: width 0.3s ease;
  }
`;
