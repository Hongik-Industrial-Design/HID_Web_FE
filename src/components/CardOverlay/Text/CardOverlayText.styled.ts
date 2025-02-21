import styled, { css } from 'styled-components';

export const CardOverlayTextContainer = styled.div<{
  $isThumbnailHovered: boolean;
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;

  width: 100%;
  height: 100%;
  padding: 4.8rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  ${({ $isThumbnailHovered }) =>
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
`;

export const OverlaySubTitle = styled.span`
  ${({ theme }) => theme.fontStyles.SubTitle1}
  color: ${({ theme }) => theme.colors.HID_Grayscale[100]};
  text-align: center;
`;
