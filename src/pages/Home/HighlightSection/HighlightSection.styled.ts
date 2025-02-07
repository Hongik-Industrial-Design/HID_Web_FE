import styled from 'styled-components';

export const HighlightSectionContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;

  overflow-x: scroll;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;
