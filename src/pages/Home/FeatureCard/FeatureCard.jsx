/* eslint-disable react/prop-types */
import {
  FeatureCardContainer,
  FeatureCardImage,
  FeatureCardInfoContainer,
  FeatureCardInfo,
  FeatureCardDate,
  FeatureCardContents,
} from "./FeatureCard.styled";

const FeatureCard = ({ cardData }) => {
  return (
    <FeatureCardContainer>
      <FeatureCardImage
        src={`/FeatureCardImage/${cardData.imageUrl}`}
        alt="cardData"
      />
      <FeatureCardInfoContainer>
        <FeatureCardInfo>
          <FeatureCardDate>{cardData.date}</FeatureCardDate>
          <FeatureCardContents>
            <div className="title">{cardData.title}</div>
            <div className="description">{cardData.description}</div>
          </FeatureCardContents>
        </FeatureCardInfo>
      </FeatureCardInfoContainer>
    </FeatureCardContainer>
  );
};

export default FeatureCard;
