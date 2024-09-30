import { useEffect, useState } from "react";
import axios from "axios";

import { ExhibitionContainer, StickyContainer } from "./Exhibition.styled";

import Category from "./Category/Category";
import Gallery from "./Gallery/Gallery";

const Exhibition = () => {
  const [pieces, setPieces] = useState([]);
  const [categorizedPieces, setCategorizedPieces] = useState([]);

  // Fetching Dummy Gallery Image
  useEffect(() => {
    const fetchGalleryImage = async () => {
      try {
        const response = await axios.get("/data/gallery.json");
        const galleryThumbnails = response.data;

        setPieces(galleryThumbnails);
        setCategorizedPieces(galleryThumbnails);
      } catch (error) {
        console.error("Fetching Error: ", error);
      }
    };

    fetchGalleryImage();
  }, []);

  // Filterirng corresponding category Pieces list
  const handleFilterPieces = (category) => {
    if (category === "All") {
      setCategorizedPieces(pieces);
    } else {
      const filteredPieces = pieces.filter(
        (piece) => piece.category === category
      );

      setCategorizedPieces(filteredPieces);
    }
  };

  return (
    <ExhibitionContainer>
      <StickyContainer>
        <Category handleFilter={handleFilterPieces} />
      </StickyContainer>
      <Gallery pieces={categorizedPieces} />
    </ExhibitionContainer>
  );
};

export default Exhibition;
