import styled, { css } from 'styled-components';

export const StudentExhibitionContainer = styled.div<{
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
`;

export const ExhibitionContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  gap: 19.6rem;
`;

export const StickyContainer = styled.div`
  position: relative;
`;

export const StudentExhibitionGalleryContainer = styled.div`
  flex-grow: 1;

  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
`;

export const StudentExhibitionGalleryTitle = styled.h1`
  margin-bottom: 8.5rem;

  ${({ theme }) => theme.fontStyles.Header1};
  color: ${({ theme }) => theme.colors.HID_Grayscale[800]};

  span {
    color: ${({ theme }) => theme.colors.HID_YellowDot};
  }
`;
