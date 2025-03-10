import styled from 'styled-components';
import { motion } from 'framer-motion';

export const GraduationExhibitionContainer = styled.div`
  width: 100%;
  height: fit-content;
`;

export const BannerFrame = styled(motion.div)`
  width: 100%;
  height: fit-content;
`;

export const GraduationBanner = styled.img`
  width: 100%;
  height: fit-content;
`;

export const GraduationVideo = styled.video`
  width: 100%;
  height: fit-content;
`;

export const GraduationExhibitonGalleryContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 11.7rem 0 8.4rem 0;
`;

export const ExhibitionContainer = styled.div`
  width: 100%;
  height: fit-content;
  /* padding: 11.7rem 0; */

  display: flex;
  justify-content: center;
  gap: 19.6rem;
`;

export const StickyContainer = styled.div`
  position: relative;
`;

export const StudentExhibitionGalleryContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 8.8rem;
`;

export const StudentExhibitionGalleryTitle = styled.h1`
  ${({ theme }) => theme.fontStyles.Header1};
  color: ${({ theme }) => theme.colors.HID_Grayscale[800]};

  span {
    color: ${({ theme }) => theme.colors.HID_YellowDot};

    user-select: auto;
    -webkit-user-select: auto;
  }
`;
