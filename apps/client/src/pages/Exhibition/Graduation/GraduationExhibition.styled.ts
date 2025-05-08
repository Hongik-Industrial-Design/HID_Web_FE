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

export const GraduationVideo = styled.video`
  width: 100%;
  height: auto;

  display: block;

  @media (max-width: 480px) {
    margin-top: 70px;
  }
`;

export const GraduationExhibitonGalleryContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 8.4rem 15.8rem;
`;

export const ExhibitionContainer = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  gap: 19.6rem;
`;

export const StickyContainer = styled.div`
  position: relative;
`;

export const ExhibitionGallerySection = styled.section`
  flex-grow: 1;

  width: 100%;
  height: fit-content;
`;
