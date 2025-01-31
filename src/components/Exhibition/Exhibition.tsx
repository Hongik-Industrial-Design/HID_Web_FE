import axios from 'axios';
import { JSX } from 'react/jsx-runtime';
import { useEffect, useState } from 'react';

import { GalleryInfos } from './Gallery.types';

import Category from './Category/Category';
import Gallery from './Gallery/Gallery';

import * as S from './Exhibition.styled';

const Exhibition = (): JSX.Element => {
  const [pieces, setPieces] = useState<GalleryInfos[]>([]);
  const [categorizedPieces, setCategorizedPieces] = useState<GalleryInfos[]>(
    []
  );

  // Fetching Dummy Gallery Image
  useEffect(() => {
    const fetchGalleryImage = async () => {
      try {
        const response = await axios.get('/data/gallery.json');
        const galleryThumbnails = response.data;

        setPieces(galleryThumbnails);
        setCategorizedPieces(galleryThumbnails);
      } catch (error) {
        console.error('Fetching Error: ', error);
      }
    };

    fetchGalleryImage();
  }, []);

  // Filterirng corresponding category Pieces list
  const handleFilterPieces = (category: string) => {
    if (category === 'All') {
      setCategorizedPieces(pieces);
    } else {
      const filteredPieces = pieces.filter(
        (piece) => piece.category === category
      );

      setCategorizedPieces(filteredPieces);
    }
  };

  return (
    <S.ExhibitionContainer>
      <S.StickyContainer>
        <Category handleFilter={handleFilterPieces} />
      </S.StickyContainer>
      <Gallery pieces={categorizedPieces} />
    </S.ExhibitionContainer>
  );
};

export default Exhibition;
