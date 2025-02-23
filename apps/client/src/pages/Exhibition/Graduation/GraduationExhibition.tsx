import { JSX } from 'react/jsx-runtime';

import Exhibition from '@components/Exhibition/Exhibition';

// import graduationBanner from '@assets/images/graduation-banner.jpg';

import * as S from './GraduationExhibition.styled';

export const GraduationExhibition = (): JSX.Element => {
  const GraduationVideoURL =
    'http://www.hongik-id-degreeshow2023.com/wp-content/themes/hidds/assets/images/main/main-video.mp4';

  return (
    <S.GraduationExhibitionContainer>
      <S.BannerFrame
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: 'spring',
            damping: 15,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        {/* <S.GraduationBanner src={graduationBanner} alt="graduation-banner" /> */}
        <S.GraduationVideo src={GraduationVideoURL} autoPlay loop muted />
      </S.BannerFrame>

      <S.GraduationExhibitonGalleryContainer>
        <Exhibition />
      </S.GraduationExhibitonGalleryContainer>
    </S.GraduationExhibitionContainer>
  );
};

export default GraduationExhibition;
