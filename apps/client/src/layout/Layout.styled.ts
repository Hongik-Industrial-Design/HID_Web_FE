import styled from 'styled-components';

export const TopLevelContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

export const Contents = styled.main<{ $isNoPaddingTop: boolean }>`
  width: 100%;
  min-height: 100vh;
  padding-top: ${({ $isNoPaddingTop }) => ($isNoPaddingTop ? '0' : '70px')};
`;
