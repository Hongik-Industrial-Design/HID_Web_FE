import { JSX } from 'react/jsx-runtime';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { useGraduationBannerVideoQuery } from '@api/query/graduationExhibitionQuery';
import { GalleryInfos } from '@components/Gallery/Exhibition.types';

import { GRADUATION_CATEGORY_LIST } from '@constants/exhibitionCategory';

import Loading from '@components/Loading/Loading';
import Category from '@components/Category/Category';
import GraduationExhibitionGallery from '@components/Gallery/GraduationGallery/GraduationExhibitionGallery';

import * as S from './GraduationExhibition.styled';

export const GraduationExhibition = (): JSX.Element => {
  const [pieces, setPieces] = useState<GalleryInfos[]>([]); // All Pieces
  const [categorizedPieces, setCategorizedPieces] = useState<GalleryInfos[]>(
    []
  );
  const [exhibitionYear, setExhibitionYear] = useState<number>(2024);

  // Fetching Banner Video
  const {
    status,
    data: bannerVideo,
    error,
  } = useGraduationBannerVideoQuery(2024);

  // Fetching Dummy Gallery Image
  useEffect(() => {
    const fetchGalleryImage = async () => {
      try {
        const response = await axios.get('/data/gallery.json');
        const galleryData = response.data;

        setPieces(galleryData.gallery);
        setCategorizedPieces(galleryData.gallery);
        setExhibitionYear(galleryData.year);
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
    <S.GraduationExhibitionContainer>
      <S.BannerFrame
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: 'spring',
            damping: 15,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
      >
        {status === 'pending' ? (
          <Loading />
        ) : status === 'error' ? (
          <span>Error: {error.message}</span>
        ) : (
          <S.GraduationVideo src={bannerVideo.videoUrl} autoPlay loop muted />
        )}
      </S.BannerFrame>

      <S.GraduationExhibitonGalleryContainer>
        <S.ExhibitionContainer>
          <S.StickyContainer>
            <Category
              currentCategory={GRADUATION_CATEGORY_LIST[0]}
              handleFilter={handleFilterPieces}
            />
          </S.StickyContainer>

          <GraduationExhibitionGallery
            pieces={categorizedPieces}
            exhibitionYear={String(exhibitionYear)}
          />
        </S.ExhibitionContainer>
      </S.GraduationExhibitonGalleryContainer>
    </S.GraduationExhibitionContainer>
  );
};

export default GraduationExhibition;
