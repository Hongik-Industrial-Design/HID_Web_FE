import { JSX } from 'react/jsx-runtime';
import { useParams } from 'react-router';

import {
  useGraduationBannerVideoQuery,
  useGraduationExhbitionPreviewQuery,
} from '@api/query/graduationExhibitionQuery';

import { GRADUATION_CATEGORY_LIST } from '@constants/exhibitionCategory';

import Loading from '@components/Loading/Loading';
import Category from '@components/Category/Exhibition/CategoryExhibtion';
import GraduationExhibitionGallery from '@components/Gallery/GraduationGallery/GraduationExhibitionGallery';

import * as S from './GraduationExhibition.styled';

export const GraduationExhibition = (): JSX.Element => {
  const { year } = useParams();

  const exhibitionYear = year ?? '2024';

  // Fetching Banner Video
  const {
    status,
    data: bannerVideo,
    error,
  } = useGraduationBannerVideoQuery(Number(exhibitionYear));

  // 졸업 전시 Preview 조회 API
  const {
    status: previewStatus,
    data: exhibitionPreviews,
    error: previewError,
  } = useGraduationExhbitionPreviewQuery('GRADUATION', exhibitionYear, 'ALL');

  // Filterirng corresponding category Pieces list
  const handleFilterPieces = (category: string) => {
    if (category === 'All') {
      setCategorizedPieces(pieces);
    } else {
      const filteredPieces = pieces.filter(
        (piece) => piece.category === category
      );

      setCategorizedPieces(filteredPieces);
    }
  };

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
        <S.ExhibitionContainer>
          <S.StickyContainer>
            <Category
              currentCategory={GRADUATION_CATEGORY_LIST[0]}
              handleFilter={handleFilterPieces}
            />
          </S.StickyContainer>

          <S.ExhibitionGallerySection>
            {previewStatus === 'pending' ? (
              <Loading />
            ) : previewStatus === 'error' ? (
              <span>Error: {previewError.message}</span>
            ) : (
              <GraduationExhibitionGallery
                previews={exhibitionPreviews}
                exhibitionYear={String(exhibitionYear)}
              />
            )}
          </S.ExhibitionGallerySection>
        </S.ExhibitionContainer>
      </S.GraduationExhibitonGalleryContainer>
    </S.GraduationExhibitionContainer>
  );
};

export default GraduationExhibition;
