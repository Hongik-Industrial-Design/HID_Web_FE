import styled from 'styled-components';

export const GalleryContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 2.4rem;
`;
