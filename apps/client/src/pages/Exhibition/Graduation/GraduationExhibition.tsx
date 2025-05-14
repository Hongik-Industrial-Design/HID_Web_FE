import { JSX } from 'react/jsx-runtime';
import { useParams } from 'react-router';

import { useGraduationBannerVideoQuery } from '@api/query/exhibitionQuery';

import Loading from '@components/Loading/Loading';
import ExhibitionPreview from '../Common/Preview/ExhibitionPreview';

import { useSearchStore } from '@stores/useSearchStore';

import { LoadingWrapper } from '@components/Gallery/ExhibitionGallery.styled';
import * as S from './GraduationExhibition.styled';

export const GraduationExhibition = (): JSX.Element => {
  const { year } = useParams();
  const exhibitionYear = year ?? '2024';

  const { isQueryEnabled } = useSearchStore();

  // Fetching Banner Video
  const {
    status,
    data: bannerVideo,
    error,
  } = useGraduationBannerVideoQuery(Number(exhibitionYear));

  return (
    <S.GraduationExhibitionContainer>
      {!isQueryEnabled && (
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
            <LoadingWrapper>
              <Loading />
            </LoadingWrapper>
          ) : status === 'error' ? (
            <span>Error: {error.message}</span>
          ) : (
            <S.GraduationVideo
              src={bannerVideo.videoUrl}
              autoPlay
              muted
              loop
              playsInline
              $webkit-playsinline="true"
            />
          )}
        </S.BannerFrame>
      )}

      <ExhibitionPreview exhibitType="GRADUATION" />
    </S.GraduationExhibitionContainer>
  );
};

export default GraduationExhibition;
