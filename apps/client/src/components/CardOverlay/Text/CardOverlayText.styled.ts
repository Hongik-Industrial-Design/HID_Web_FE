import styled, { css } from 'styled-components';

export const CardOverlayTextContainer = styled.div<{
  $isFacultyPage: boolean;
  $isThumbnailHovered: boolean;
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;

  width: 100%;
  height: 100%;
  padding: 2.4rem 1.2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  ${({ $isThumbnailHovered, $isFacultyPage }) =>
    $isThumbnailHovered
      ? css`
          z-index: 11;
          transform: translate(-50%, -50%);
          backdrop-filter: blur(3px);
          opacity: 1;
          transition:
            transform 0.3s ease-out,
            opacity 0.3s ease;
        `
      : $isFacultyPage
        ? css`
            transform: translate(-100%, -50%);
            opacity: 0;
            transition:
              transform 0.25s ease-out,
              opacity 0.3s ease;
          `
        : css`
            transform: translate(-120%, -30%);
            opacity: 0;
            transition:
              transform 0.25s ease-out,
              opacity 0.3s ease;
          `};
`;

export const OverlayTitle = styled.span`
  ${({ theme }) => theme.fontStyles.Title3}
  color: ${({ theme }) => theme.colors.HID_Grayscale[0]};
  text-align: center;

  @media (max-width: 2560px) {
    font-size: clamp(2.4rem, 1.6vw, 2.8rem);
  }

  @media (max-width: 1200px) {
    font-size: clamp(2.2rem, 2.8vw, 3.2rem);
  }

  @media (max-width: 768px) {
    font-size: clamp(2rem, 3.6vw, 2.6rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(2rem, 6vw, 2.8rem);
  }
`;

export const OverlaySubTitle = styled.span`
  ${({ theme }) => theme.fontStyles.SubTitle1}

  color: ${({ theme }) => theme.colors.HID_Grayscale[100]};
  text-align: center;

  @media (max-width: 2560px) {
    font-size: clamp(1.4rem, 0.8vw, 1.8rem);
  }

  @media (max-width: 1200px) {
    font-size: clamp(1.4rem, 1.6vw, 1.8rem);
  }

  @media (max-width: 768px) {
    font-size: clamp(1.2rem, 2.4vw, 1.4rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(1.2rem, 3.6vw, 1.6rem);
  }
`;
