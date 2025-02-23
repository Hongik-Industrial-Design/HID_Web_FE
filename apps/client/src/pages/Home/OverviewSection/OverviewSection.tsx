import axios from 'axios';
import { JSX } from 'react/jsx-runtime';
import { useEffect, useRef, useState } from 'react';

import { HighlightCard } from '../HighlightSection/Highlight.types';

import SliderNavigation from '@components/SliderNavigation/SliderNavigation';
import HighlightSection from '../HighlightSection/HighlightSection';

import * as S from './OverviewSection.styled';

const OverviewSection = (): JSX.Element => {
  const [highlights, setHighlights] = useState<HighlightCard[]>([]);

  // Fetching highlight section data
  useEffect(() => {
    const fetchHighlightData = async () => {
      try {
        const response = await axios.get('/data/highlights.json');
        const highlightData = response.data;
        // console.log(highlightData);

        setHighlights(highlightData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchHighlightData();
  }, []);

  // 스크롤 이벤트 핸들러 및 useRef 설정
  const cardContainerRef = useRef<HTMLDivElement>(null);

  const calculateScrollAmount = (): number => {
    if (!cardContainerRef.current) return 0;

    const scrollAmount =
      cardContainerRef.current.scrollWidth / highlights.length;

    return scrollAmount;
  };

  const handleNextClick = () => {
    if (!cardContainerRef.current) return;

    cardContainerRef.current.scrollBy({
      left: calculateScrollAmount(),
      behavior: 'smooth',
    });
  };

  const handlePreviousClick = () => {
    if (!cardContainerRef.current) return;

    cardContainerRef.current.scrollBy({
      left: -1 * calculateScrollAmount(),
      behavior: 'smooth',
    });
  };

  return (
    <S.OverviewContainer>
      <S.OverviewHeader>
        <S.IntroductionText>
          About <br />
          Hongik Industrial Design<span>.</span>
        </S.IntroductionText>
        <SliderNavigation
          handleNextClick={handleNextClick}
          handlePreviousClick={handlePreviousClick}
        />
      </S.OverviewHeader>
      <HighlightSection
        cardContainerRef={cardContainerRef}
        highlightData={highlights}
      />
    </S.OverviewContainer>
  );
};

export default OverviewSection;
