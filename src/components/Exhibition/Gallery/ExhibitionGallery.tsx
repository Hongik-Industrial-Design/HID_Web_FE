import { JSX } from 'react/jsx-runtime';
import { useNavigate } from 'react-router';
import { AnimatePresence } from 'framer-motion';

import { GalleryInfos } from '../Gallery.types';

import SearchBar from '@components/SearchBar/SearchBar';
import Piece from './Piece/Piece';

import * as S from './ExhibitionGallery.styled';

interface GalleryProps {
  pieces: GalleryInfos[];
  exhibitionYear: string;
}

const ExhibitionGallery = ({
  pieces,
  exhibitionYear,
}: GalleryProps): JSX.Element => {
  const navigate = useNavigate();

  // Routing to individual pieces
  const goToDetailPage = (id: number) => {
    navigate(`/graduation/work/${id}`);
  };

  return (
    <S.GalleryWrapper>
      <S.GalleryHeader>
        <S.ExhbitionYear>{exhibitionYear}</S.ExhbitionYear>
        <SearchBar placeholder="Search by student name" />
      </S.GalleryHeader>
      <S.GalleryContainer>
        <AnimatePresence>
          {pieces.map((piece) => (
            <Piece
              key={piece.id}
              pieceName={piece.thumbnail}
              pieceInfos={piece.credit}
              goToDetailPage={() => goToDetailPage(piece.id)}
            />
          ))}
        </AnimatePresence>
      </S.GalleryContainer>
    </S.GalleryWrapper>
  );
};

export default ExhibitionGallery;
