import styled, { css } from 'styled-components';

export const ExhibitionPageWrapper = styled.div<{
  $isPendingOrError: boolean;
}>`
  width: 100%;
  height: fit-content;
  padding: 6.8rem 15.8rem;

  ${({ $isPendingOrError }) =>
    $isPendingOrError &&
    css`
      padding: 0;
      height: calc(100vh - 118px);

      display: flex;
      justify-content: center;
      align-items: center;
    `}

  @media (max-width: 1200px) {
    padding: 6.8rem 8.4rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 3.2rem;
  }
`;

export const ExhibitionContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  gap: clamp(3.2rem, 10vw, 19.6rem);

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 4.8rem;
  }
`;

export const StickyContainer = styled.div`
  position: relative;
`;

export const ExhibitionGalleryContainer = styled.div`
  flex-grow: 1;

  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
`;

export const ExhibitionGalleryTitle = styled.h1`
  margin-bottom: 6.4rem;

  ${({ theme }) => theme.fontStyles.Header1};
  color: ${({ theme }) => theme.colors.HID_Grayscale[800]};

  span {
    color: ${({ theme }) => theme.colors.HID_YellowDot};
  }

  @media (max-width: 1200px) {
    margin-bottom: 4.8rem;
  }
`;
