/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

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
    <Link to={cardData.route}>
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
    </Link>
  );
};

export default FeatureCard;
