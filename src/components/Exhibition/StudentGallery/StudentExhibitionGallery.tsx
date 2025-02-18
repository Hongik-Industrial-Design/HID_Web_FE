import { JSX } from 'react/jsx-runtime';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import { AnimatePresence } from 'framer-motion';

import { StudentPreviewInfos } from '../Exhibition.types';

import SearchBar from '@components/SearchBar/SearchBar';
import Piece from './Piece/Piece';
import Pagination from '@components/Pagination/Pagination';

import * as S from './StudentExhibitionGallery.styled';

interface StudentExhibitionGalleryProps {
  pieces: StudentPreviewInfos[];
  exhibitionYear: string;
}

const StudentExhibitionGallery = ({
  pieces,
  exhibitionYear,
}: StudentExhibitionGalleryProps): JSX.Element => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(pieces.length / 9);

  const handleCurrentPage = (page: number) => setCurrentPage(page);

  // 페이지네이션 작품 리스트 계산 Logic
  const paginatedPieces = useMemo(() => {
    const startIndex = (currentPage - 1) * 9;
    return pieces.slice(startIndex, currentPage * 9);
  }, [currentPage, pieces]);

  const goToDetailPage = (id: number) => navigate(`/graduation/work/${id}`);

  return (
    <S.GalleryWrapper>
      <S.GalleryHeader>
        <S.ExhbitionYear>{exhibitionYear}</S.ExhbitionYear>
        <SearchBar placeholder="Search by student name" />
      </S.GalleryHeader>
      <S.GalleryContainer>
        <AnimatePresence>
          {paginatedPieces.map((piece) => (
            <Piece
              key={piece.exhibitId}
              title={piece.titleEn}
              subTitle={piece.subTitleEn}
              imageURL={piece.mainImgUrl}
              goToDetailPage={() => goToDetailPage(piece.exhibitId)}
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

export default StudentExhibitionGallery;
