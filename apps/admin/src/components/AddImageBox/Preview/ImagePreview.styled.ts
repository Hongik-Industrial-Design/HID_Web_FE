import styled, { css } from 'styled-components';

export const ImagePreviewContainer = styled.div<{
  $isThumbnailChecked: boolean;
}>`
  position: relative;

  width: 40rem;
  height: 40rem;

  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.HID_Grayscale[200]};

  overflow: hidden;

  &::after {
    content: ${({ $isThumbnailChecked }) =>
      $isThumbnailChecked ? '""' : 'none'};
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: transparent;
    border-radius: 2px;
    border: 4px solid ${({ theme }) => theme.colors.HID_YellowDot};
  }
`;

export const PreviewImage = styled.img<{
  $isImageHovered: boolean;
}>`
  position: relative;

  width: 100%;
  height: 100%;

  ${({ $isImageHovered }) =>
    $isImageHovered &&
    css`
      filter: blur(4px);
      transform: scale(1.1);
      opacity: 0.4;
    `}

  transition:
    all 0.2s ease-in-out,
    transform 0.3s ease-in-out,
    border 0.1s ease;
`;
