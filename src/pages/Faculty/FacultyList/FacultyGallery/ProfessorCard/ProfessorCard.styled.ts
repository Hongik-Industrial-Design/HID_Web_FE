import styled, { css } from 'styled-components';
import { Link } from 'react-router';

export const ProfessorCardLink = styled(Link)`
  width: fit-content;
  height: fit-content;
`;

export const ProfessorContainer = styled.div`
  position: relative;

  width: fit-content;
  height: fit-content;
`;

export const ProfessorThumbnail = styled.img`
  width: clamp(32rem, 21vw, 40.4rem);
  height: fit-content;

  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.HID_Grayscale[200]};

  @media (max-width: 1080px) {
    width: clamp(24rem, 30vw, 32rem);
  }
`;

export const ProfessorOverlay = styled.div<{ $isThumbnailHovered: boolean }>`
  ${({ $isThumbnailHovered }) =>
    $isThumbnailHovered
      ? css`
          opacity: 1;
          backdrop-filter: blur(1px);
          transition:
            opacity 0.2s ease-out,
            backdrop-filter 0.1s ease-in;
        `
      : css`
          opacity: 0;
          backdrop-filter: blur(0px);
          transition:
            opacity 0.15s ease-out,
            backdrop-filter 0.1s ease-out;
        `};

  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;

  border-radius: 2px;
  background-color: rgba(9, 40, 122, 0.5);
`;

export const OverlayName = styled.h3`
  ${({ theme }) => theme.fontStyles.Title3}
  color: ${({ theme }) => theme.colors.HID_Grayscale[0]};
`;

export const OverlayMajor = styled.span`
  ${({ theme }) => theme.fontStyles.SubTitle1}
  color: ${({ theme }) => theme.colors.HID_Grayscale[100]};
`;
