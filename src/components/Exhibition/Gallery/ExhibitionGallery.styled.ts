import styled from 'styled-components';

export const GalleryWrapper = styled.div`
  width: fit-content;
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

export const GalleryContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 2.4rem;
`;

export const PaginationSection = styled.section`
  width: fit-content;
  height: fit-content;
  margin-top: 3.2rem;
`;
