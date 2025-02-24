import styled from 'styled-components';

export const FacultyGalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 2.4rem;

  @media (max-width: 1480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
