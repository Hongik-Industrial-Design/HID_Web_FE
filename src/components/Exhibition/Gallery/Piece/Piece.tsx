import { useState } from 'react';
import { motion } from 'framer-motion';

import * as S from './Piece.styled';

import OverlayInfos from './Overlay/OverlayInfos';

const Piece = ({ pieceName, pieceInfos, goToDetailPage }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <S.PieceContainer
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={goToDetailPage}
      >
        <S.PieceImage
          src={`/Exhibition-Thumbnail/${pieceName}`}
          alt={pieceName}
        />
        <OverlayInfos pieceInfos={pieceInfos} isHovered={isHovered} />
      </S.PieceContainer>
    </motion.div>
  );
};

export default Piece;
