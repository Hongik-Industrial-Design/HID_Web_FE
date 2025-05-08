import { JSX } from 'react/jsx-runtime';
import { useEffect, useState } from 'react';

import { useStudentExhbitionPreviewQuery } from '@api/query/studentExhibitionQuery';

import CategoryExhibition from '@components/Category/Exhibition/CategoryExhibtion';
import StudentExhibitionGallery from '@components/Gallery/StudentGallery/StudentExhibitionGallery';
import Loading from '@components/Loading/Loading';

import { ARCHIVE_YEAR_LIST } from '@constants/archive';
import { STUDENT_CLUB_LIST } from '@constants/exhibitionCategory';

import * as S from './StudentExhibition.styled';
import { useSearchStore } from '@stores/useSearchStore';

export interface SelectStudentExhibition {
  year: string;
  club: string;
}

const StudentExhibition = (): JSX.Element => {
  const [selectedExhibition, setSelectedExhibition] =
    useState<SelectStudentExhibition>({
      year: ARCHIVE_YEAR_LIST[0],
      club: STUDENT_CLUB_LIST[0],
    });

  const handlePreviewFilter = (
    key: keyof SelectStudentExhibition,
    club: string
  ) => {
    setSelectedExhibition((prev) => ({
      ...prev,
      [key]: club,
    }));

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Fetching Student Exhibition Preview Data (Tanstack Query 적용)
  const {
    status,
    data: previews = [],
    error,
  } = useStudentExhbitionPreviewQuery(
    'CLUB',
    selectedExhibition.year,
    selectedExhibition.club.toUpperCase()
  );

  const { isQueryEnabled, resetSearch } = useSearchStore();

  // 검색 기능 초기화
  useEffect(() => {
    resetSearch();
  }, [resetSearch]);

  return (
    <S.StudentExhibitionContainer
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
                currentCategory={selectedExhibition.club}
                handleFilter={handlePreviewFilter}
              />
            </S.StickyContainer>
          )}
          <S.StudentExhibitionGalleryContainer>
            <S.StudentExhibitionGalleryTitle>
              Student Exhibiton<span>.</span>
            </S.StudentExhibitionGalleryTitle>
            <StudentExhibitionGallery
              pieces={previews}
              exhibitionYear={selectedExhibition.year}
            />
          </S.StudentExhibitionGalleryContainer>
        </S.ExhibitionContainer>
      )}
    </S.StudentExhibitionContainer>
  );
};

export default StudentExhibition;
