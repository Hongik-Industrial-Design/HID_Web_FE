import { JSX } from 'react/jsx-runtime';
import { useEffect, useState } from 'react';

import { fetchStudentExhibitionPreview } from '@api/exhibition';
import { StudentExhibitionPreview } from '@schemas/exhibition';

import Category from '@components/Category/Category';
import StudentExhibitionGallery from '@components/Exhibition/StudentGallery/StudentExhibitionGallery';

import * as S from './StudentExhibition.styled';

export interface SelectStudentExhibition {
  year: string;
  club: string;
}

const StudentExhibiton = (): JSX.Element => {
  const [selectedExhibition, setSelectedExhibition] =
    useState<SelectStudentExhibition>({
      year: '2024',
      club: 'ALL',
    });

  const handlePreviewFilter = (
    key: keyof SelectStudentExhibition,
    club: string
  ) =>
    setSelectedExhibition((prev) => ({
      ...prev,
      [key]: club,
    }));

  const [previews, setPreviews] = useState<StudentExhibitionPreview>([]);
  // const [filteredPreviews, setFilteredPreviews] =
  //   useState<StudentExhibitionPreview>([]);

  // Fetching Student Exhibition Preview Data
  useEffect(() => {
    const getStudentExhibitionPreview = async () => {
      try {
        const studentPreview = await fetchStudentExhibitionPreview(
          selectedExhibition.year,
          selectedExhibition.club
        );
        console.log(
          '타입 검증 후의 학생 전시 Preview 데이터: ',
          studentPreview
        );

        setPreviews(studentPreview);
        // setFilteredPreviews(studentPreview);
      } catch (error) {
        console.error('학생 전시 데이터 가져오기 실패: ', error);
      }
    };

    getStudentExhibitionPreview();
  }, [selectedExhibition]);

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

          <StudentExhibitionGallery
            pieces={previews}
            exhibitionYear={selectedExhibition.year}
          />
        </S.StudentExhibitionGalleryContainer>
      </S.ExhibitionContainer>
    </S.StudentExhibitionContainer>
  );
};

export default StudentExhibiton;
