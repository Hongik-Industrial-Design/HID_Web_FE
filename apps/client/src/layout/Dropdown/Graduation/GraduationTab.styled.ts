import styled, { css } from 'styled-components';
import { Link } from 'react-router';

export const GraduationTabContainer = styled.div<{
  $isRendered: boolean;
  $isActive: boolean;
}>`
  width: 100%;
  height: 24rem;

  display: flex;

  background-color: ${({ theme }) => theme.colors.HID_Grayscale[0]};

  opacity: ${({ $isRendered, $isActive }) =>
    $isRendered || $isActive ? 1 : 0};

  transition: opacity 0.4s ease-in-out;

  @media (max-width: 2560px) {
    height: clamp(24rem, 13vw, 26rem);
  }

  @media (max-width: 1920px) {
    height: clamp(22rem, 13vw, 24rem);
  }

  @media (max-width: 1440px) {
    height: clamp(20rem, 12vw, 22rem);
  }

  @media (max-width: 1200px) {
    height: clamp(18rem, 16vw, 20rem);
  }

  @media (max-width: 1080px) {
    height: clamp(20rem, 24vw, 24rem);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

// Infos
export const ExhibitionInfos = styled.section`
  width: 50%;
  height: 100%;
  padding: 4rem 6.4rem 0 15.8rem;

  @media (max-width: 2560px) {
    padding-top: clamp(4.8rem, 3vw, 6rem);
  }

  @media (max-width: 1920px) {
    max-width: 45%;
    padding-top: clamp(3.2rem, 2.4vw, 4.8rem);
  }

  @media (max-width: 1440px) {
    max-width: 38%;
  }

  @media (max-width: 1200px) {
    max-width: 35%;
    padding-left: 8.4rem;
    padding-top: clamp(2.4rem, 1.6vw, 3.2rem);
  }

  @media (max-width: 1080px) {
    display: none;
  }
`;

export const ExhibitionTitle = styled.h3`
  ${({ theme }) => theme.fontStyles.Title3}
  font-size: clamp(1.8rem, 1.8vw, 2.4rem);
  color: ${({ theme }) => theme.colors.HID_Grayscale[800]};
`;

export const ExhibitionDescription = styled.p`
  ${({ theme }) => theme.fontStyles.Body4}
  color:${({ theme }) => theme.colors.HID_Grayscale[700]};
`;

export const InfoDivider = styled.div`
  width: 4rem;
  height: 1px;
  margin: 3.2rem 0 2.4rem 0;

  background: ${({ theme }) => theme.colors.HID_Grayscale[800]};

  @media (max-width: 1440px) {
    margin-top: clamp(2.4rem, 1.6vw, 3.2rem);
    margin-bottom: clamp(1.6rem, 1vw, 2.4rem);
  }

  @media (max-width: 1200px) {
    width: 3rem;
    margin-top: clamp(1.6rem, 1vw, 2.4rem);
    margin-bottom: clamp(1.2rem, 0.8vw, 1.6rem);
  }
`;

// Poster
export const ExhibitionPosterContainer = styled.section`
  flex-grow: 1;
`;

export const ExhibitonPosterList = styled.ul`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: flex-start;
`;

export const ExhibitonPosterItem = styled.li`
  position: relative;

  flex: 1;

  width: 100%;
  height: 100%;

  overflow-y: hidden;
`;

export const ExhibitonLink = styled(Link)`
  width: 100%;
  height: 100%;
`;

export const ExhibitionPoster = styled.img<{ $isHovered: boolean }>`
  display: block;

  width: 100%;
  height: 100%;
  aspect-ratio: 16 / 19;

  ${({ $isHovered }) =>
    $isHovered
      ? css`
          filter: saturate(100%);
          transition: filter 0.25s ease-in-out;
        `
      : css`
          filter: saturate(0%);
          transition: filter 0.2s ease-out;
        `}
`;

export const OverlappedYearContainer = styled.div<{ $isHovered: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  height: fit-content;
  padding: 1.2rem 0;
  text-align: center;

  background-color: rgba(9, 40, 122, 0.32);
  backdrop-filter: blur(20px);

  ${({ $isHovered }) =>
    $isHovered
      ? css`
          opacity: 1;
          trasnform: translateY(0);
          transition:
            opacity 0.2s ease-in-out,
            transform 0.2s ease-in-out;
        `
      : css`
          opacity: 0;
          transform: translateY(100%);
          transition:
            opacity 0.2s ease-out,
            transform 0.2s ease-out;
        `}
`;

export const ExhibitionYear = styled.span`
  ${({ theme }) => theme.fontStyles.Title4}
  color: ${({ theme }) => theme.colors.HID_Grayscale[0]};
`;
