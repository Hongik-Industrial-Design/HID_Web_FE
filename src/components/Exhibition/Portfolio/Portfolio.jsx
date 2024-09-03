import { useEffect, useState } from "react";
import { Gallery, Piece } from "./Portfolio.styled";

const Portfolio = () => {
  const [pieces, setPieces] = useState([]);

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
    <Gallery>
      {pieces.map((piece) => (
        <Piece
          key={piece.id}
          src={`src/assets/DummyGallery/${piece.name}`}
          alt={piece.name}
        />
      ))}
    </Gallery>
  );
};

export default Portfolio;
