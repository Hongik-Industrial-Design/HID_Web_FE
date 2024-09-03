import { useEffect, useState } from "react";
import { GalleryContainer } from "./Gallery.styled";
import Piece from "./Piece/Piece";

const Gallery = () => {
  const [pieces, setPieces] = useState([]);
  // const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    fetch("/gallery.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network Problem");
        }
        return response.json();
      })
      .then((data) => setPieces(data))
      .catch((error) => console.error("Fetching Error", error));
  }, []);

  return (
    <GalleryContainer>
      {pieces.map((piece) => (
        <Piece
          key={piece.id}
          pieceName={piece.name}
          pieceInfos={piece.credit}
        />
      ))}
    </GalleryContainer>
  );
};

export default Gallery;
