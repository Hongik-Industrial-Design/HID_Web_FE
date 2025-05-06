import { JSX } from 'react/jsx-runtime';
import { useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { ExhibitionPreview } from '@schemas/exhibition';

import SearchBar from '@components/SearchBar/SearchBar';
import Piece from './Piece/Piece';
import Pagination from '@components/Pagination/Pagination';

import * as S from './StudentExhibitionGallery.styled';

interface StudentExhibitionGalleryProps {
  pieces: ExhibitionPreview;
  exhibitionYear: string;
}

const StudentExhibitionGallery = ({
  pieces,
  exhibitionYear,
}: StudentExhibitionGalleryProps): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(pieces?.length / 9);

  const handleCurrentPage = (page: number) => {
    setCurrentPage(page);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 페이지네이션 작품 리스트 계산 Logic
  const paginatedPieces = useMemo(() => {
    const startIndex = (currentPage - 1) * 9;
    return pieces?.slice(startIndex, currentPage * 9);
  }, [currentPage, pieces]);

  return (
    <S.GalleryWrapper>
      {/* Header */}
      <S.GalleryHeader>
        <S.ExhbitionYear>{exhibitionYear}</S.ExhbitionYear>
        <SearchBar placeholder="Search by student name" />
      </S.GalleryHeader>

      {/* Gallery */}
      <S.GallerySection>
        <S.GalleryList>
          <AnimatePresence>
            {paginatedPieces?.map((piece) => (
              <Piece
                key={piece.exhibitId}
                exhibitId={piece.exhibitId}
                title={piece.titleEn}
                subTitle={piece.subTitleEn}
                imageURL={piece.mainImgUrl}
              />
            ))}
          </AnimatePresence>
        </S.GalleryList>
      </S.GallerySection>

      {/* Pagination */}
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

export default StudentExhibitionGallery;
