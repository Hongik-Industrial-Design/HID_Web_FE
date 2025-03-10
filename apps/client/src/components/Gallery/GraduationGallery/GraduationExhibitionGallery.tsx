import { JSX } from 'react/jsx-runtime';
import { useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { ExhibitionPreview } from '@schemas/exhibition';

import SearchBar from '@components/SearchBar/SearchBar';
import Piece from './Piece/Piece';
import Pagination from '@components/Pagination/Pagination';

import * as S from './GraduationExhibitionGallery.styled';

interface GraduationGalleryProps {
  previews: ExhibitionPreview;
  exhibitionYear: string;
}

const GraduationExhibitionGallery = ({
  previews,
  exhibitionYear,
}: GraduationGalleryProps): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(previews?.length / 9);

  const handleCurrentPage = (page: number) => setCurrentPage(page);

  // 페이지네이션 작품 리스트 계산 Logic
  const paginatedPreviews = useMemo(() => {
    const startIndex = (currentPage - 1) * 9;
    return previews?.slice(startIndex, currentPage * 9);
  }, [currentPage, previews]);

  return (
    <S.GalleryWrapper>
      <S.GalleryHeader>
        <S.ExhbitionYear>{exhibitionYear}</S.ExhbitionYear>
        <SearchBar placeholder="Search by student name" />
      </S.GalleryHeader>
      <S.GalleryContainer>
        <AnimatePresence>
          {paginatedPreviews?.map((preview) => (
            <Piece
              key={preview.exhibitId}
              exhibitId={preview.exhibitId}
              title={preview.titleEn}
              subTitle={preview.subTitleEn}
              imageURL={preview.mainImgUrl}
            />
          ))}
        </AnimatePresence>
      </S.GalleryContainer>
      <S.PaginationSection>
        <Pagination
          currentPage={currentPage}
          handleCurrentPage={handleCurrentPage}
          totalPages={totalPages}
        />
      </S.PaginationSection>
    </S.GalleryWrapper>
  );
};

export default GraduationExhibitionGallery;
