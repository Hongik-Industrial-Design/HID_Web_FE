import { JSX } from 'react/jsx-runtime';
import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { EXHIBIT_TYPE } from '@client-types/exhibition.types';

import { useSearchArtworkQuery } from '@api/query/exhibitionQuery';
import { useSearchStore } from '@stores/useSearchStore';
import { ExhibitionPreview } from '@schemas/exhibition';

import SearchBar from '@components/SearchBar/SearchBar';
import Piece from './Piece/Piece';
import Pagination from '@components/Pagination/Pagination';
import Loading from '@components/Loading/Loading';

import { useResponsiveItemCount } from '@hooks/useResponsiveItemCount';

import * as S from './ExhibitionGallery.styled';

interface StudentExhibitionGalleryProps {
  exhibitType: EXHIBIT_TYPE;
  pieces: ExhibitionPreview;
  exhibitionYear: string;
}

const ExhibitionGallery = ({
  exhibitType,
  pieces,
  exhibitionYear,
}: StudentExhibitionGalleryProps): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = useResponsiveItemCount(); // 반응형 고려 페이지네이션

  const handleCurrentPage = (page: number) => {
    setCurrentPage(page);

    if (exhibitType === 'CLUB') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // 페이지네이션 작품 리스트 계산 Logic
  const paginatedPieces = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return pieces?.slice(startIndex, currentPage * itemsPerPage);
  }, [currentPage, pieces, itemsPerPage]);

  const exhibitionMetadata = {
    exhibitType,
    year: location.pathname.split('/')[2],
  };

  const { searchTerm, isQueryEnabled } = useSearchStore();
  const searchType = 'TITLE'; // (임시) 검색 타입 설정

  const {
    status: searchStatus,
    data: searchedArtwork,
    error,
  } = useSearchArtworkQuery(
    exhibitionMetadata.exhibitType as EXHIBIT_TYPE,
    exhibitionMetadata.year,
    searchTerm,
    searchType,
    isQueryEnabled
  );

  const renderedArtworks =
    isQueryEnabled && searchStatus === 'success'
      ? searchedArtwork
      : paginatedPieces;

  const totalArtworkCount =
    isQueryEnabled && searchStatus === 'success'
      ? searchedArtwork?.length
      : pieces?.length;

  const [totalPages, setTotalPages] = useState<number>(() =>
    Math.ceil(totalArtworkCount / itemsPerPage)
  );

  useEffect(() => {
    const totalPages = Math.ceil(totalArtworkCount / itemsPerPage);
    setTotalPages(totalPages);
  }, [totalArtworkCount, itemsPerPage]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  return (
    <S.GalleryWrapper>
      {/* Header */}
      <S.GalleryHeader $isQueryEnabled={isQueryEnabled}>
        {!isQueryEnabled || totalArtworkCount === 0 ? (
          <S.ExhbitionYear>{exhibitionYear}</S.ExhbitionYear>
        ) : (
          <S.YearResultCount>
            <S.ExhbitionYear>{exhibitionYear}</S.ExhbitionYear>
            <S.SearchResultCount>
              <span>{totalArtworkCount}</span>{' '}
              {totalArtworkCount > 1 ? 'Artworks' : 'Artwork'}
            </S.SearchResultCount>
          </S.YearResultCount>
        )}
        <SearchBar
          exhibitType={exhibitType}
          placeholder="Search by artwork title"
        />
      </S.GalleryHeader>

      {/* 모바일 뷰에서의 Search Count */}
      {isQueryEnabled && totalArtworkCount !== 0 && (
        <S.MobileSearchResultCount>
          <span>{totalArtworkCount}</span>{' '}
          {totalArtworkCount > 1 ? 'Artworks' : 'Artwork'}
        </S.MobileSearchResultCount>
      )}

      {/* Gallery */}
      {isQueryEnabled && searchStatus === 'pending' ? (
        <S.LoadingWrapper>
          <Loading />
        </S.LoadingWrapper>
      ) : searchStatus === 'error' ? (
        <span>Error: {error.message}</span>
      ) : totalArtworkCount === 0 ? (
        <S.NotFoundWrapper>
          <span>No Artworks found</span>
          {isQueryEnabled && !!searchTerm && (
            <span className="query-caption">
              Can't find artwork title called "{searchTerm}"
            </span>
          )}
        </S.NotFoundWrapper>
      ) : (
        <>
          <S.GallerySection>
            <S.GalleryList>
              <AnimatePresence>
                {renderedArtworks?.map((piece) => (
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
        </>
      )}
    </S.GalleryWrapper>
  );
};

export default ExhibitionGallery;
