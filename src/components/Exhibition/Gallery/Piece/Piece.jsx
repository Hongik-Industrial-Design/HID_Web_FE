import { useState } from "react";

import OverlayInfos from "./Overlay/OverlayInfos";
import { PieceContainer, PieceImage } from "./Piece.styled";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Piece = ({ pieceName, pieceInfos, goToDetailPage }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opactiy: 0 }}
    >
      <PieceContainer
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={goToDetailPage}
      >
        <PieceImage
          src={`src/assets/DummyGallery/${pieceName}`}
          alt={pieceName}
        />
        <OverlayInfos pieceInfos={pieceInfos} isHovered={isHovered} />
      </PieceContainer>
    </motion.div>
  );
};

export default Piece;
