import styled, { css } from 'styled-components';
import { Link } from 'react-router';

export const GraduationTabContainer = styled.div<{
  $isRendered: boolean;
  $isActive: boolean;
}>`
  width: 100%;
  height: fit-content;

  display: flex;

  background-color: ${({ theme }) => theme.colors.HID_Grayscale[0]};

  opacity: ${({ $isRendered, $isActive }) =>
    $isRendered || $isActive ? 1 : 0};

  transition: opacity 0.4s ease-in-out;
`;

export const ExhibitionInfos = styled.section`
  width: 50%;
  height: fit-content;
  padding: 4rem 1.6rem 0 15.8rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ExhibitionTitle = styled.h3`
  ${({ theme }) => theme.fontStyles.Title3}
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

  background-color: ${({ theme }) => theme.colors.HID_Grayscale[800]};
`;

export const ExhibitionPosterContainer = styled.section`
  flex-grow: 1;
`;

export const ExhibitonPosterList = styled.ul`
  width: 100%;

  display: flex;
  align-items: center;
`;

export const ExhibitonPosterItem = styled.li`
  position: relative;

  flex: 1;

  width: 100%;
  height: fit-content;

  overflow-y: hidden;
`;

export const ExhibitonLink = styled(Link)`
  width: 100%;
  height: fit-content;
`;

export const ExhibitionPoster = styled.img<{ $isHovered: boolean }>`
  width: 100%;
  height: fit-content;

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
  padding: 1.6rem 0;
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
