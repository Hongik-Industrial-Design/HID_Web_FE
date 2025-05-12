import { JSX } from 'react/jsx-runtime';
import { useSearchParams } from 'react-router';
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

  const handleCurrentPage = (page: number) => {
    setCurrentPage(page);

    if (exhibitType === 'CLUB') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // 페이지네이션 작품 리스트 계산 Logic
  const paginatedPieces = useMemo(() => {
    const startIndex = (currentPage - 1) * 9;
    return pieces?.slice(startIndex, currentPage * 9);
  }, [currentPage, pieces]);

  const exhibitionMetadata = {
    exhibitType,
    year: location.pathname.split('/')[2],
  };

  // (임시) 검색 타입 설정

  const { searchTerm, isQueryEnabled, setIsQueryEnabled } = useSearchStore();

  const searchType = 'TITLE';

  const [params] = useSearchParams();
  const searchTitle = params.get('title');

  useEffect(() => {
    if (searchTitle) {
      setIsQueryEnabled(true);
    } else {
      setIsQueryEnabled(false);
    }
  }, [searchTitle, setIsQueryEnabled]);

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

  const totalPages = Math.ceil(totalArtworkCount / 9);

  return (
    <S.GalleryWrapper>
      {/* Header */}
      <S.GalleryHeader>
        <S.ExhbitionYear>{exhibitionYear}</S.ExhbitionYear>
        <SearchBar
          exhibitType={exhibitType}
          placeholder="Search by artwork title"
        />
      </S.GalleryHeader>

      {/* Gallery */}
      {isQueryEnabled && searchStatus === 'pending' ? (
        <S.LoadingWrapper>
          <Loading />
        </S.LoadingWrapper>
      ) : searchStatus === 'error' ? (
        <span>Error: {error.message}</span>
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
