import styled from 'styled-components';

export const GalleryWrapper = styled.div`
  width: 100%;
  height: fit-content;
`;

export const GalleryHeader = styled.section`
  width: 100%;
  height: fit-content;
  margin-bottom: 3.2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ExhbitionYear = styled.h2`
  ${({ theme }) => theme.fontStyles.Header2};
  color: ${({ theme }) => theme.colors.HID_Grayscale[800]};
`;

export const GallerySection = styled.section`
  width: 100%;
  height: fit-content;
`;

export const GalleryList = styled.ul`
  width: 100%;
  height: fit-content;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 2rem;

  @media (max-width: 1920px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1440px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const PaginationSection = styled.section`
  width: fit-content;
  height: fit-content;
  margin-top: 3.2rem;
`;
