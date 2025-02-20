import styled, { css } from 'styled-components';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

export const PieceContainer = styled(motion.li)`
  width: fit-content;
  height: fit-content;
`;

export const PieceLink = styled(Link)`
  width: fit-content;
  height: fit-content;

  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.HID_Grayscale[200]};
`;

export const PieceOverlayContainer = styled.div`
  position: relative;

  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;

  overflow: hidden;
`;

export const PieceImage = styled.img`
  width: 38.5rem;
  height: fit-content;

  display: block;

  border-radius: 2px;
`;

export const OverlayBackgroundTop = styled.div<{
  $isThumbnailHovered: boolean;
}>`
  position: absolute;
  top: -100%;
  left: 0;
  z-index: -1;

  width: 100%;
  height: 100%;

  opacity: 0;
  background-color: rgba(9, 40, 122, 0.5);

  ${({ $isThumbnailHovered }) =>
    $isThumbnailHovered
      ? css`
          z-index: 10;
          opacity: 1;
          transform: translateY(50%);
          backdrop-filter: blur(3px);
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

export const OverlayBackgroundBottom = styled.div<{
  $isThumbnailHovered: boolean;
}>`
  position: absolute;
  bottom: -100%;
  left: 0;
  z-index: -1;

  width: 100%;
  height: 100%;

  background-color: rgba(9, 40, 122, 0.5);

  ${({ $isThumbnailHovered }) =>
    $isThumbnailHovered
      ? css`
          z-index: 10;
          opacity: 1;
          transform: translateY(-50%);
          backdrop-filter: blur(3px);
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
