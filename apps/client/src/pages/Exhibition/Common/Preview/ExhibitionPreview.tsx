import { JSX } from 'react/jsx-runtime';
import { useEffect, useState } from 'react';

import { useExhbitionPreviewQuery } from '@api/query/studentExhibitionQuery';

import CategoryExhibition from '@components/Category/Exhibition/CategoryExhibtion';
import ExhibitionGallery from '@components/Gallery/ExhibitionGallery';
import Loading from '@components/Loading/Loading';

import { ARCHIVE_YEAR_LIST } from '@constants/archive';
import {
  EXHIBIT_TYPE,
  ExhibitionBasicInfo,
} from '@client-types/exhibition.types';
import { useSearchStore } from '@stores/useSearchStore';

import * as S from './ExhibitionPreview.styled';

type ExhibitionProps = {
  exhibitType: EXHIBIT_TYPE;
};

const ExhibitionPreview = ({ exhibitType }: ExhibitionProps): JSX.Element => {
  const [selectedExhibition, setSelectedExhibition] =
    useState<ExhibitionBasicInfo>({
      year: ARCHIVE_YEAR_LIST[0],
      clubOrMajor: 'All',
    });

  const handlePreviewFilter = (
    key: keyof ExhibitionBasicInfo,
    clubOrMajor: string
  ) => {
    setSelectedExhibition((prev) => ({
      ...prev,
      [key]: clubOrMajor,
    }));

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
    selectedExhibition.year,
    selectedExhibition.clubOrMajor.toUpperCase()
  );

  const { isQueryEnabled, resetSearch } = useSearchStore();

  // 검색 기능 초기화
  useEffect(() => {
    resetSearch();
  }, [resetSearch]);

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
                currentCategory={selectedExhibition.clubOrMajor}
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
              exhibitionYear={selectedExhibition.year}
            />
          </S.ExhibitionGalleryContainer>
        </S.ExhibitionContainer>
      )}
    </S.ExhibitionPageWrapper>
  );
};

export default ExhibitionPreview;
