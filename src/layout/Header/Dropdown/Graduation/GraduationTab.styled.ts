import styled from 'styled-components';
import { colors } from '@styles/theme/colors';

import { DropdownTransientProps } from '../Dropdown.types';

export const ExhibitionTabContainer = styled.div<DropdownTransientProps>`
  position: fixed;
  top: 70px;
  z-index: -1;
  z-index: ${({ $isNavbarHovered, $isDropdownOpen }) =>
    ($isNavbarHovered || $isDropdownOpen) && 100};

  width: 100%;
  min-height: fit-content;
  padding: 3.2rem 15.8rem 4rem;

  display: flex;

  background-color: ${colors.HID_Grayscale[0]};

  transition: opacity 0.4s ease-in-out;

  opacity: ${({ $isNavbarHovered, $isDropdownOpen }) =>
    $isNavbarHovered || $isDropdownOpen ? 1 : 0};
`;

export const ExhibitionPreview = styled.section`
  flex: 1;

  width: fit-content;
  min-height: fit-content;

  display: flex;
  align-items: center;
  gap: 4rem;
`;

export const ExhibitionLogoContainer = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 7.2rem 4.2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 2px;
  background-color: #acb6c7;
`;

export const ExhibitionLogo = styled.img`
  user-select: none;
`;

export const ExhibitionInfos = styled.div`
  width: 35.5rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InfoDivider = styled.div`
  width: 4rem;
  height: 1px;
  margin: 3.2rem 0 2.4rem 0;

  background-color: ${({ theme }) => theme.colors.HID_Grayscale[800]};
`;

export const ExhibitionTitle = styled.h3`
  ${({ theme }) => theme.fontStyles.Title3}
  color: ${({ theme }) => theme.colors.HID_Grayscale[800]};
`;

export const ExhibitionDescription = styled.p`
  ${({ theme }) => theme.fontStyles.Body4}
  color:${({ theme }) => theme.colors.HID_Grayscale[700]};
`;
