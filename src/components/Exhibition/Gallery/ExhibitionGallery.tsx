import { JSX } from 'react/jsx-runtime';
// import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { AnimatePresence } from 'framer-motion';

import { GalleryInfos } from '../Gallery.types';

import Piece from './Piece/Piece';

import * as S from './ExhibitionGallery.styled';

interface GalleryProps {
  pieces: GalleryInfos[];
}

const ExhibitionGallery = ({ pieces }: GalleryProps): JSX.Element => {
  const navigate = useNavigate();

  // Routing to individual pieces
  const goToDetailPage = (id: number) => {
    navigate(`/graduation/work/${id}`);
  };

  return (
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
  );
};

export default ExhibitionGallery;
