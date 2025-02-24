import styled, { css } from 'styled-components';

export const OverlayBackgroundContainer = styled.div`
  position: relative;

  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;

  overflow: hidden;
`;

export const OverlayBackgroundTopOrLeft = styled.div<{
  $isVertical: boolean;
  $isThumbnailHovered: boolean;
}>`
  position: absolute;

  ${({ $isVertical }) =>
    $isVertical
      ? css`
          top: -100%;
        `
      : css`
          left: -100%;
        `}

  left: 0;
  z-index: -1;

  width: 100%;
  height: 100%;

  opacity: 0;
  background-color: rgba(9, 40, 122, 0.5);

  ${({ $isThumbnailHovered, $isVertical }) =>
    $isThumbnailHovered
      ? $isVertical
        ? css`
            z-index: 10;
            opacity: 1;
            transform: translateY(50%);
            /* backdrop-filter: blur(3px); */
            transition:
              transform 0.3s ease,
              opacity 0.3s ease,
              backdrop-filter 0.2s ease;
          `
        : css`
            z-index: 10;
            opacity: 1;
            transform: translateX(50%);
            /* backdrop-filter: blur(3px); */
            transition:
              transform 0.3s ease,
              opacity 0.3s ease,
              backdrop-filter 0.2s ease;
          `
      : css`
          opacity: 0;
          transition:
            z-index 0.3s ease,
            transform 0.3s ease,
            opacity 0.3s ease,
            backdrop-filter 0.2s ease-out;
        `};
`;

export const OverlayBackgroundBottomOrRight = styled.div<{
  $isVertical: boolean;
  $isThumbnailHovered: boolean;
}>`
  position: absolute;

  ${({ $isVertical }) =>
    $isVertical
      ? css`
          bottom: -100%;
        `
      : css`
          right: -100%;
        `}

  left: 0;
  z-index: -1;

  width: 100%;
  height: 100%;

  background-color: rgba(9, 40, 122, 0.5);

  ${({ $isThumbnailHovered, $isVertical }) =>
    $isThumbnailHovered
      ? $isVertical
        ? css`
            z-index: 10;
            opacity: 1;
            transform: translateY(-50%);
            /* backdrop-filter: blur(3px); */
            transition:
              transform 0.3s ease,
              opacity 0.3s ease,
              backdrop-filter 0.2s ease;
          `
        : css`
            z-index: 10;
            opacity: 1;
            transform: translateX(-50%);
            /* backdrop-filter: blur(3px); */
            transition:
              transform 0.3s ease,
              opacity 0.3s ease,
              backdrop-filter 0.2s ease;
          `
      : css`
          opacity: 0;
          transition:
            z-index 0.3s ease,
            transform 0.3s ease,
            opacity 0.3s ease,
            backdrop-filter 0.2s ease-out;
        `};
`;
