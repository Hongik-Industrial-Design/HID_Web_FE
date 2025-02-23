import { JSX } from 'react/jsx-runtime';

import { HighlightCard } from '../HighlightSection/Highlight.types';

import * as S from './FeatureCard.styled';

interface FeatureCardProps {
  cardData: HighlightCard;
}

const FeatureCard = ({ cardData }: FeatureCardProps): JSX.Element => {
  return (
    <S.FeatureCardLink to={cardData.route}>
      <S.FeatureCardContainer>
        <S.FeatureCardImage
          src={`/FeatureCardImage/${cardData.imageUrl}`}
          alt="cardData"
        />
        <S.FeatureCardInfoContainer>
          <S.FeatureCardInfo>
            <S.FeatureCardDate>{cardData.date}</S.FeatureCardDate>
            <S.FeatureCardTitle>{cardData.title}</S.FeatureCardTitle>
            <S.FeatureCardDescription>
              {cardData.description}
            </S.FeatureCardDescription>
          </S.FeatureCardInfo>
        </S.FeatureCardInfoContainer>
      </S.FeatureCardContainer>
    </S.FeatureCardLink>
  );
};

export default FeatureCard;
