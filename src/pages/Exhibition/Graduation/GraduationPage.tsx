import { JSX } from 'react/jsx-runtime';
import { motion } from 'framer-motion';

import Exhibition from '@components/Exhibition/Exhibition';

import * as S from './GraduationPage.styled';

import graduationBanner from '@assets/images/banners/graduation-banner.jpg';

export const GraduationPage = (): JSX.Element => {
  return (
    <S.GraduationPageContainer>
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
    </S.GraduationPageContainer>
  );
};

export default GraduationPage;
