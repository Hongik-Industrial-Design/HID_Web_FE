import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { GalleryWrapper, GalleryContainer } from "./Gallery.styled";

import Piece from "./Piece/Piece";
import ScrollButton from "@components/ScrollButton/ScrollButton";
import Indicator from "./Indicator/Indicator";

const Gallery = () => {
  const navigate = useNavigate();

  const [pieces, setPieces] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [galleryHeight, setGalleryHeight] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const galleryRef = useRef(null);

  // Fetching Dummy Gallery Image
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

  // Calculating height of Gallery grid
  useEffect(() => {
    if (galleryRef.current) {
      const gridHeight = galleryRef.current.offsetHeight;
      setGalleryHeight(gridHeight);
    }
    // console.log(galleryHeight);
  }, [pieces, galleryHeight]);

  // Routing to individual pieces
  const goToDetailPage = (id) => {
    navigate(`/graduation/work/${id}`);
  };

  const handleScroll = () => {
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
  };

  const handleScrollIndicator = () => {
    const scrollLeft = galleryRef.current.scrollLeft;
    const scrollWidth = galleryRef.current.scrollWidth;
    const clientWidth = galleryRef.current.clientWidth;

    // 가로 스크롤 진행률 계산 (%)
    const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
    setScrollProgress(progress);
  };

  const scrollLeft = () => {
    galleryRef.current.style.scrollSnapType = "x mandatory";

    galleryRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });

    setTimeout(() => {
      galleryRef.current.style.scrollSnapType = "none";
    }, 1000);
  };

  const scrollRight = () => {
    galleryRef.current.style.scrollSnapType = "x mandatory";

    galleryRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });

    setTimeout(() => {
      galleryRef.current.style.scrollSnapType = "none";
    }, 1000);
  };

  return (
    <GalleryWrapper $height={galleryHeight}>
      <ScrollButton
        arrowType="left"
        onClick={scrollLeft}
        isScrolled={isScrolled}
      />
      <GalleryContainer ref={galleryRef} onScroll={handleScroll}>
        {pieces.map((piece) => (
          <Piece
            key={piece.id}
            pieceName={piece.thumbnail}
            pieceInfos={piece.credit}
            goToDetailPage={() => goToDetailPage(piece.id)}
          />
        ))}
      </GalleryContainer>
      <ScrollButton
        arrowType="right"
        onClick={scrollRight}
        isScrolled={isScrolled}
      />
      <Indicator
        handleScroll={handleScrollIndicator}
        width={`${scrollProgress}%`}
      />
    </GalleryWrapper>
  );
};

export default Gallery;
