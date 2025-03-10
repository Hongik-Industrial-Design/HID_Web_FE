import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';

import { useStudentExhbitionPreviewQuery } from '@api/query/studentExhibitionQuery';

import Category from '@components/Category/Category';
import StudentExhibitionGallery from '@components/Gallery/StudentGallery/StudentExhibitionGallery';
import Loading from '@components/Loading/Loading';

import { ARCHIVE_YEAR_LIST } from '@constants/archiveYear';
import { STUDENT_CLUB_LIST } from '@constants/exhibitionCategory';

import * as S from './StudentExhibition.styled';

export interface SelectStudentExhibition {
  year: string;
  club: string;
}

const StudentExhibition = (): JSX.Element => {
  const [selectedExhibition, setSelectedExhibition] =
    useState<SelectStudentExhibition>({
      year: ARCHIVE_YEAR_LIST[1], // 추후 배열의 0번 index로 기본값 설정 (number -> string)
      club: STUDENT_CLUB_LIST[0],
    });

  const handlePreviewFilter = (
    key: keyof SelectStudentExhibition,
    club: string
  ) =>
    setSelectedExhibition((prev) => ({
      ...prev,
      [key]: club,
    }));

  // Fetching Student Exhibition Preview Data (Tanstack Query 적용)
  const {
    status,
    data: previews = [],
    isFetching,
    error,
  } = useStudentExhbitionPreviewQuery(
    selectedExhibition.year,
    selectedExhibition.club.toUpperCase()
  );

  // console.log('Tanstack Query 적용 후의 학생 전시 Preview 데이터: ', previews);

  // // Client Side Filtering Logic (애니메이션 구체화 시 사용 - 백엔드와 로직 상의 필요)
  // const handlePreviewFilter = (category: string) => {
  //   if (category === 'ALL') {
  //     setFilteredPreviews(previews);
  //   } else {
  //     const filteredPreviews = previews.filter(
  //       (preview) => preview.club === category
  //     );

  //     setFilteredPreviews(filteredPreviews);
  //   }
  // };

  return (
    <S.StudentExhibitionContainer>
      <S.ExhibitionContainer>
        <S.StickyContainer>
          <Category
            currentCategory={selectedExhibition.club}
            handleFilter={handlePreviewFilter}
          />
        </S.StickyContainer>
        <S.StudentExhibitionGalleryContainer>
          <S.StudentExhibitionGalleryTitle>
            Student Exhibiton<span>.</span>
          </S.StudentExhibitionGalleryTitle>

          {status === 'pending' ? (
            <Loading />
          ) : status === 'error' ? (
            <span>Error: {error.message}</span>
          ) : (
            <>
              <StudentExhibitionGallery
                pieces={previews}
                exhibitionYear={selectedExhibition.year}
              />
              <span>{isFetching ? 'Background Updating...' : ''}</span>
            </>
          )}
        </S.StudentExhibitionGalleryContainer>
      </S.ExhibitionContainer>
    </S.StudentExhibitionContainer>
  );
};

export default StudentExhibition;
