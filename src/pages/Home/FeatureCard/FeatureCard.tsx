import { Link } from 'react-router';

import * as S from './FeatureCard.styled';

const FeatureCard = ({ cardData }) => {
  return (
    <Link to={cardData.route}>
      <S.FeatureCardContainer>
        <S.FeatureCardImage
          src={`/FeatureCardImage/${cardData.imageUrl}`}
          alt="cardData"
        />
        <S.FeatureCardInfoContainer>
          <S.FeatureCardInfo>
            <S.FeatureCardDate>{cardData.date}</S.FeatureCardDate>
            <S.FeatureCardContents>
              <div className="title">{cardData.title}</div>
              <div className="description">{cardData.description}</div>
            </S.FeatureCardContents>
          </S.FeatureCardInfo>
        </S.FeatureCardInfoContainer>
      </S.FeatureCardContainer>
    </Link>
  );
};

export default FeatureCard;
