import axios from 'axios';
import { JSX } from 'react/jsx-runtime';
import { useEffect, useState } from 'react';

import { HighlightCard } from './Highlight.types';

import FeatureCard from '../FeatureCard/FeatureCard';

import * as S from './HighlightSection.styled';

const HighlightSection = (): JSX.Element => {
  const [highlights, setHighlights] = useState<HighlightCard[]>([]);

  // Fetching highlight section data
  useEffect(() => {
    const fetchHighlightData = async () => {
      try {
        const response = await axios.get('/data/highlights.json');
        const highlightData = response.data;
        console.log(highlightData);

        setHighlights(highlightData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchHighlightData();
  }, []);

  return (
    <S.HighlightSectionContainer>
      {highlights.map((highlight) => (
        <FeatureCard key={highlight.id} cardData={highlight} />
      ))}
    </S.HighlightSectionContainer>
  );
};

export default HighlightSection;
