import { Link } from 'react-router';
import styled, { css } from 'styled-components';

export const CommunityTabContainer = styled.div<{
  $isRendered: boolean;
  $isActive: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: fit-content;
  padding: 2.4rem 0 3.6rem 0;

  opacity: 0;

  ${({ $isRendered, $isActive }) =>
    ($isRendered || $isActive) &&
    css`
      opacity: 1;
    `}

  transition: opacity 0.25s ease-out;
`;

export const CommunityMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const CommunityMenu = styled.li`
  font-size: 2rem;
  font-weight: 300;
  line-height: normal;
  color: ${({ theme }) => theme.colors.HID_Grayscale[800]};
`;

export const CommunityMenuLink = styled(Link)`
  width: fit-content;
  height: fit-content;
`;
