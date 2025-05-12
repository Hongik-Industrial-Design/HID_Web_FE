import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';

import { useExhbitionPreviewQuery } from '@api/query/exhibitionQuery';

import CategoryExhibition from '@components/Category/Exhibition/CategoryExhibtion';
import ExhibitionGallery from '@components/Gallery/ExhibitionGallery';
import Loading from '@components/Loading/Loading';

import {
  EXHIBIT_TYPE,
  EXHIBITION_CATEGORY_TYPE,
} from '@client-types/exhibition.types';

import { useSearchStore } from '@stores/useSearchStore';
import { useExhibitionYearStore } from '@stores/useExhibitionYearStore';

import * as S from './ExhibitionPreview.styled';

type ExhibitionProps = {
  exhibitType: EXHIBIT_TYPE;
};

const ExhibitionPreview = ({ exhibitType }: ExhibitionProps): JSX.Element => {
  const { selectedYear } = useExhibitionYearStore();
  const { isQueryEnabled } = useSearchStore();

  const [selectedClubOrMajor, setSelectedClubOrMajor] = useState<string>('All');

  const exhibitionYear =
    exhibitType === 'GRADUATION' ? selectedYear.graduation : selectedYear.club;

  const handlePreviewFilter = (clubOrMajor: EXHIBITION_CATEGORY_TYPE) => {
    setSelectedClubOrMajor(clubOrMajor);

    if (exhibitType === 'CLUB') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Fetching Exhibition Preview Data (Tanstack Query 적용)
  const {
    status,
    data: previews = [],
    error,
  } = useExhbitionPreviewQuery(
    exhibitType,
    exhibitionYear,
    selectedClubOrMajor.toUpperCase()
  );

  return (
    <S.ExhibitionPageWrapper
      $isPendingOrError={status === 'pending' || status === 'error'}
    >
      {status === 'pending' ? (
        <Loading />
      ) : status === 'error' ? (
        <span>Error: {error.message}</span>
      ) : (
        <S.ExhibitionContainer>
          {!isQueryEnabled && (
            <S.StickyContainer>
              <CategoryExhibition
                exhibitType={exhibitType}
                currentCategory={selectedClubOrMajor}
                handleFilter={handlePreviewFilter}
              />
            </S.StickyContainer>
          )}
          <S.ExhibitionGalleryContainer>
            {exhibitType === 'CLUB' && (
              <S.ExhibitionGalleryTitle>
                Student Exhibiton<span>.</span>
              </S.ExhibitionGalleryTitle>
            )}
            <ExhibitionGallery
              exhibitType={exhibitType}
              pieces={previews}
              exhibitionYear={exhibitionYear}
            />
          </S.ExhibitionGalleryContainer>
        </S.ExhibitionContainer>
      )}
    </S.ExhibitionPageWrapper>
  );
};

export default ExhibitionPreview;
