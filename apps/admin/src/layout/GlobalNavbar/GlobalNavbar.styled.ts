import styled, { css } from 'styled-components';
import { Link } from 'react-router';

export const GlobalNavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  width: 100%;
  height: 70px;
  padding: 0 15.8rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4.8rem;

  background-color: ${({ theme }) => theme.colors.HID_Grayscale[50]};
  backdrop-filter: blur(4px);
`;

export const HIDAdminLogoLink = styled.a`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
`;

export const GlobalNavbarOptionList = styled.ul`
  width: fit-content;
  height: 100%;

  display: flex;
  align-items: center;
`;

export const GlobalNavbarOption = styled.li<{ $isSelected: boolean }>`
  width: fit-content;
  height: 100%;

  ${({ theme }) => theme.fontStyles.SubTitle2}
  font-size: 1.8rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.HID_Grayscale[800]};

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      color: ${({ theme }) => theme.colors.HID_Navy[900]};
      font-weight: 700;
    `}

  transition: font-weight 0.12s ease, color 0.2s ease;
`;

export const GlobalNavbarOptionLink = styled(Link)`
  width: fit-content;
  height: 100%;
  padding: 0 2.4rem;
  text-align: center;

  display: flex;
  align-items: center;
`;
