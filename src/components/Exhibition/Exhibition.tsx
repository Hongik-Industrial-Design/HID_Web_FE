import axios from 'axios';
import { JSX } from 'react/jsx-runtime';
import { useEffect, useState } from 'react';

import { GalleryInfos } from './Gallery.types';

import Category from '../Category/Category';
import Gallery from './Gallery/ExhibitionGallery';

import * as S from './Exhibition.styled';

const Exhibition = (): JSX.Element => {
  const [pieces, setPieces] = useState<GalleryInfos[]>([]); // All Pieces
  const [categorizedPieces, setCategorizedPieces] = useState<GalleryInfos[]>(
    []
  );
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [exhibitionYear, setExhibitionYear] = useState<string>('');

  // Fetching Dummy Gallery Image
  useEffect(() => {
    const fetchGalleryImage = async () => {
      try {
        const response = await axios.get('/data/gallery.json');
        const galleryData = response.data;

        setExhibitionYear(galleryData.year);
        setCategoryList(galleryData.categoryList);
        setPieces(galleryData.gallery);
        setCategorizedPieces(galleryData.gallery);
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
        <Category
          categoryList={categoryList}
          handleFilter={handleFilterPieces}
        />
      </S.StickyContainer>

      <Gallery pieces={categorizedPieces} exhibitionYear={exhibitionYear} />
    </S.ExhibitionContainer>
  );
};

export default Exhibition;
