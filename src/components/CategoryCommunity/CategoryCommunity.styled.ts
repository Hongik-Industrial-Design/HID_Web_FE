import styled, { css } from 'styled-components';
import { colors } from '@styles/theme/colors';

export const CategoryContainer = styled.div`
  min-width: 110px;

  position: sticky;
  top: 100px;

  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
`;

export const FilterOption = styled.span`
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;

  color: ${colors.HID_Grayscale[500]};

  ${({ $selectedOption }) =>
    $selectedOption &&
    css`
      color: ${colors.HID_Navy[900]};
      font-weight: 600;
    `}

  transition: color 0.1s ease-in-out;

  white-space: nowrap;
  cursor: pointer;
`;
