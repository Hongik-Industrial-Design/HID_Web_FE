import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';
import { motion } from 'framer-motion';

import { PieceProps } from '@components/Exhibition/Exhibition.types';

import OverlayInfos from './Overlay/OverlayInfos';

import * as S from './Piece.styled';

const Piece = ({
  pieceName,
  pieceInfos,
  goToDetailPage,
}: PieceProps): JSX.Element => {
  const [isPieceHovered, setIsPieceHovered] = useState<boolean>(false);

  const handleMouseEnter = () => setIsPieceHovered(true);
  const handleMouseLeave = () => setIsPieceHovered(false);

  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      style={{ height: 'fit-content' }}
    >
      <S.PieceContainer
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={goToDetailPage}
      >
        <S.PieceImage
          src={`/Exhibition-Thumbnail/${pieceName}`}
          alt={pieceName}
        />
        <OverlayInfos pieceInfos={pieceInfos} isPieceHovered={isPieceHovered} />
      </S.PieceContainer>
    </motion.div>
  );
};

export default Piece;
