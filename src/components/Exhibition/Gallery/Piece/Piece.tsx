import { useState } from 'react';
import { motion } from 'framer-motion';

import OverlayInfos from './Overlay/OverlayInfos';

import * as S from './Piece.styled';

const Piece = ({ pieceName, pieceInfos, goToDetailPage }) => {
  const [isPieceHovered, setIsPieceHovered] = useState(false);

  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <S.PieceContainer
        onMouseEnter={() => setIsPieceHovered(true)}
        onMouseLeave={() => setIsPieceHovered(false)}
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
