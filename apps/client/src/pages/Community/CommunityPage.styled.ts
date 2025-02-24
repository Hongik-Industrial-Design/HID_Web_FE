import styled, { css } from 'styled-components';

export const CommunityPageContainer = styled.div<{ $isPending: boolean }>`
  width: 100%;
  height: fit-content;
  padding: 0 15.8rem 31.9rem 15.8rem; // Scroll Top UX 고려해 padding-top 분리
  margin-top: 70px;

  display: flex;
  flex-direction: column;

  ${({ $isPending }) =>
    $isPending &&
    css`
      width: 100%;
      height: calc(100vh - 70px);
      padding: 0;
      margin: 0;

      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;
