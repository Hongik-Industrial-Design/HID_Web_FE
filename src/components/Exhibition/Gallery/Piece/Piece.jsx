import { useState } from "react";

import OverlayInfos from "./Overlay/OverlayInfos";
import { PieceContainer, PieceImage } from "./Piece.styled";

// eslint-disable-next-line react/prop-types
const Piece = ({ pieceName, pieceInfos, goToDetailPage }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
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
  );
};

export default Piece;
