import { Link } from 'react-router';
import styled from 'styled-components';

export const MobileDropdownContainer = styled.ul`
  width: 100%;
  height: fit-content;
  padding: 2.4rem 3.2rem;
`;

export const MobileDropdownItem = styled.li`
  width: 100%;
  height: fit-content;
`;

export const MobileDropdownItemLink = styled(Link)`
  width: fit-content;
  height: fit-content;
  padding: 3.2rem 0;

  display: flex;
  align-items: center;

  ${({ theme }) => theme.fontStyles.Title2};
  color: ${({ theme }) => theme.colors.HID_Grayscale[800]};

  span {
    color: ${({ theme }) => theme.colors.HID_YellowDot};
  }

  user-select: none;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  border-radius: 16px;

  background: ${({ theme }) => theme.colors.HID_Grayscale[800]};
`;
