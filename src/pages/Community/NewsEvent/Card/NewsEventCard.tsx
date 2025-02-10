import { JSX } from 'react/jsx-runtime';

import { NewsEventCardProps } from '../../Community.types';

import * as S from './NewsEventCard.styled';

const NewsEventCard = ({
  route,
  imageURL,
  deadline,
  title,
  category,
}: NewsEventCardProps): JSX.Element => {
  return (
    <S.NewsEventCardContainer href={route}>
      <S.CardThumbnail src={imageURL} alt={title} />
      <S.CardInfos>
        <span className="date">{deadline}</span>
        <span className="title">{title}</span>
        <span className="category">{category}</span>
      </S.CardInfos>
    </S.NewsEventCardContainer>
  );
};

export default NewsEventCard;
