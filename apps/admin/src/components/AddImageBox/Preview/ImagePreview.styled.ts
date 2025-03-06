import styled, { css } from 'styled-components';

export const ImagePreviewContainer = styled.div`
  position: relative;

  width: 40rem;
  height: 40rem;

  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.HID_Grayscale[200]};

  overflow: hidden;
`;

export const PreviewImage = styled.img<{ $isImageHovered: boolean }>`
  width: 100%;
  height: 100%;

  ${({ $isImageHovered }) =>
    $isImageHovered &&
    css`
      filter: blur(2px);
      opacity: 0.9;
    `}

  transition: all 0.2s ease-in-out;
`;
