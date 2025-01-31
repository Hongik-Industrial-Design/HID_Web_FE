import { JSX } from 'react/jsx-runtime';
import { motion } from 'framer-motion';

import Exhibition from '@components/Exhibition/Exhibition';

import graduationBanner from '@assets/images/banners/graduation-banner.jpg';

import * as S from './GraduationExhibition.styled';

export const GraduationExhibition = (): JSX.Element => {
  return (
    <S.GraduationExhibitionContainer>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: 'spring',
            damping: 14,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        <S.GraduationBannerImg src={graduationBanner} alt="main-banner-img" />
      </motion.div>

      <Exhibition />
    </S.GraduationExhibitionContainer>
  );
};

export default GraduationExhibition;
