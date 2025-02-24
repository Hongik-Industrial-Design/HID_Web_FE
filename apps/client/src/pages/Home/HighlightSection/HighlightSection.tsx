import { JSX } from 'react/jsx-runtime';

import { HighlightCard } from './Highlight.types';

import FeatureCard from '../FeatureCard/FeatureCard';

import * as S from './HighlightSection.styled';

type HighlightSectionProps = {
  cardContainerRef: React.RefObject<HTMLDivElement | null>;
  highlightData: HighlightCard[];
};

const HighlightSection = ({
  cardContainerRef,
  highlightData,
}: HighlightSectionProps): JSX.Element => {
  return (
    <S.HighlightSectionContainer ref={cardContainerRef}>
      {highlightData.map((highlight) => (
        <FeatureCard key={highlight.id} cardData={highlight} />
      ))}
    </S.HighlightSectionContainer>
  );
};

export default HighlightSection;
