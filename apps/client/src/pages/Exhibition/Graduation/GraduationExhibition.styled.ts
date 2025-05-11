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
