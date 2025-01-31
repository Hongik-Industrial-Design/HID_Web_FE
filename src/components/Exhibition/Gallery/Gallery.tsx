import { JSX } from 'react/jsx-runtime';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { AnimatePresence } from 'framer-motion';

import { GalleryInfos } from '../Gallery.types';

import Piece from './Piece/Piece';
import ScrollButton from '@components/ScrollButton/ScrollButton';
import Indicator from './Indicator/Indicator';

import * as S from './Gallery.styled';

interface GalleryProps {
  pieces: GalleryInfos[];
}

const Gallery = ({ pieces }: GalleryProps): JSX.Element => {
  const navigate = useNavigate();

  // const [pieces, setPieces] = useState([]);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [galleryHeight, setGalleryHeight] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const galleryRef = useRef<HTMLDivElement | null>(null);

  // // Fetching Dummy Gallery Image
  // useEffect(() => {
  //   const fetchGalleryImage = async () => {
  //     try {
  //       const response = await axios.get("/data/gallery.json");
  //       const galleryThumbnails = response.data;

  //       setPieces(galleryThumbnails);
  //     } catch (error) {
  //       console.error("Fetching Error: ", error);
  //     }
  //   };

  //   fetchGalleryImage();
  // }, []);

  // Calculating height of Gallery grid
  useEffect(() => {
    if (galleryRef.current) {
      const gridHeight = galleryRef.current.offsetHeight;
      setGalleryHeight(gridHeight);
    }
    // console.log(galleryHeight);
  }, [pieces, galleryHeight]);

  // Routing to individual pieces
  const goToDetailPage = (id: number) => {
    navigate(`/graduation/work/${id}`);
  };

  const handleScroll = () => {
    if (galleryRef.current) {
      if (galleryRef.current.scrollLeft > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Indicator Bar width 계산
      const scrollLeft = galleryRef.current.scrollLeft;
      const scrollWidth = galleryRef.current.scrollWidth;
      const clientWidth = galleryRef.current.clientWidth;

      // 가로 스크롤 진행률 계산 (%)
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  const handleScrollIndicator = () => {
    if (galleryRef.current) {
      const scrollLeft = galleryRef.current.scrollLeft;
      const scrollWidth = galleryRef.current.scrollWidth;
      const clientWidth = galleryRef.current.clientWidth;

      // 가로 스크롤 진행률 계산 (%)
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  const scrollLeft = () => {
    if (galleryRef.current) {
      galleryRef.current.style.scrollSnapType = 'x mandatory';

      galleryRef.current.scrollBy({
        left: -200,
        behavior: 'smooth',
      });
      setTimeout(() => {
        if (galleryRef.current) {
          galleryRef.current.style.scrollSnapType = 'none';
        }
      }, 1000);
    }
  };

  const scrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.style.scrollSnapType = 'x mandatory';

      galleryRef.current.scrollBy({
        left: 200,
        behavior: 'smooth',
      });

      setTimeout(() => {
        if (galleryRef.current) {
          galleryRef.current.style.scrollSnapType = 'none';
        }
      }, 1000);
    }
  };

  return (
    <S.GalleryWrapper $height={galleryHeight}>
      <S.GalleryContainer ref={galleryRef} onScroll={handleScroll}>
        <ScrollButton
          arrowType="left"
          onClick={scrollLeft}
          isScrolled={isScrolled}
        />
        <AnimatePresence>
          {pieces.map((piece) => (
            <Piece
              key={piece.id}
              pieceName={piece.thumbnail}
              pieceInfos={piece.credit}
              goToDetailPage={() => goToDetailPage(piece.id)}
            />
          ))}
        </AnimatePresence>
        <ScrollButton
          arrowType="right"
          onClick={scrollRight}
          isScrolled={isScrolled}
        />
      </S.GalleryContainer>
      <Indicator
        handleScroll={handleScrollIndicator}
        width={`${scrollProgress}%`}
      />
    </S.GalleryWrapper>
  );
};

export default Gallery;
