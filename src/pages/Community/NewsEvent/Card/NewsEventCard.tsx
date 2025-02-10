import { JSX } from 'react/jsx-runtime';

import { NewsEventCardProps } from '../../Community.types';

import PostTypeBox from '@components/PostTypeBox/PostTypeBox';

import * as S from './NewsEventCard.styled';

const NewsEventCard = ({
  route,
  imageURL,
  deadline,
  title,
  category,
}: NewsEventCardProps): JSX.Element => {
  return (
    <S.NewsEventCardContainer to={route}>
      <S.CardThumbnail src={imageURL} alt={title} />
      <S.CardInfos>
        <S.CardDate>{deadline}</S.CardDate>
        <S.CardTitle>{title}</S.CardTitle>
        <PostTypeBox type={category} />
      </S.CardInfos>
    </S.NewsEventCardContainer>
  );
};

export default NewsEventCard;
