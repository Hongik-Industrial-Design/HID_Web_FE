import styled, { css } from 'styled-components';

export const CommunityPageContainer = styled.div<{ $isPending: boolean }>`
  width: 100%;
  height: 100%;
  padding: 0 15.8rem 9.6rem 15.8rem; // Scroll Top UX 고려해 padding-top 분리

  display: flex;
  flex-direction: column;

  ${({ $isPending }) =>
    $isPending &&
    css`
      padding: 0;
      margin: 0;

      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;
