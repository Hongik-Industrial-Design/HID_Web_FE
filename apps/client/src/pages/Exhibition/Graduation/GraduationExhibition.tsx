import { JSX } from 'react/jsx-runtime';

import { useGraduationBannerVideoQuery } from '@api/query/graduationExhibitionQuery';

import Exhibition from '@components/Exhibition/Exhibition';
import Loading from '@components/Loading/Loading';

import * as S from './GraduationExhibition.styled';

export const GraduationExhibition = (): JSX.Element => {
  const exhibitionYear = 2024;

  const {
    status,
    data: bannerVideo,
    error,
  } = useGraduationBannerVideoQuery(exhibitionYear);

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
        {status === 'pending' ? (
          <Loading />
        ) : status === 'error' ? (
          <span>Error: {error.message}</span>
        ) : (
          <S.GraduationVideo src={bannerVideo.videoUrl} autoPlay loop muted />
        )}
      </S.BannerFrame>

      <S.GraduationExhibitonGalleryContainer>
        <Exhibition />
      </S.GraduationExhibitonGalleryContainer>
    </S.GraduationExhibitionContainer>
  );
};

export default GraduationExhibition;
