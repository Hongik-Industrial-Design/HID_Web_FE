import styled, { css } from 'styled-components';

export const GalleryWrapper = styled.div`
  width: 100%;
  height: fit-content;
`;

export const GalleryHeader = styled.section<{ $isQueryEnabled: boolean }>`
  width: 100%;
  height: fit-content;
  margin-bottom: clamp(2.4rem, 4.8vw, 3.6rem);

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    margin-bottom: ${({ $isQueryEnabled }) =>
      $isQueryEnabled ? '1.2rem' : '3.2rem'};
  }
`;

export const YearResultCount = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: clamp(1.8rem, 2vw, 2.4rem);
`;

export const ExhbitionYear = styled.h2`
  ${({ theme }) => theme.fontStyles.Header2};
  color: ${({ theme }) => theme.colors.HID_Grayscale[800]};
`;

const SearchResultCountStyle = css`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  ${({ theme }) => theme.fontStyles.Title5};
  color: ${({ theme }) => theme.colors.HID_Grayscale[400]};
`;

export const SearchResultCount = styled.span`
  ${SearchResultCountStyle}

  @media (max-width: 480px) {
    display: none;
  }
`;

export const MobileSearchResultCount = styled.span`
  ${SearchResultCountStyle}
  margin-bottom: 2rem;

  @media (min-width: 480px) {
    display: none;
  }
`;

export const LoadingWrapper = styled.div`
  flex-grow: 1;

  width: 100%;
  height: 30vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NotFoundWrapper = styled.div`
  flex-grow: 1;

  width: 100%;
  height: 40vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  ${({ theme }) => theme.fontStyles.Title3};
  color: ${({ theme }) => theme.colors.HID_Grayscale[400]};

  .query-caption {
    ${({ theme }) => theme.fontStyles.Title4};
    color: ${({ theme }) => theme.colors.HID_Grayscale[300]};
  }

  @media (max-width: 768px) {
    height: 50vh;
  }
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
