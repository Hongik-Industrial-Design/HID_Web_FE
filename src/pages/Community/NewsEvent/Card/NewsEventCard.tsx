import { JSX } from 'react/jsx-runtime';

import { NewsEventType } from '../../Community.types';

import PostTypeBox from '@components/PostTypeBox/PostTypeBox';

import * as S from './NewsEventCard.styled';

interface NewsEventCardProps {
  route: string;
  thumbnailUrl: string;
  createdDate: string;
  title: string;
  category: NewsEventType;
}

const NewsEventCard = ({
  route,
  thumbnailUrl,
  createdDate,
  title,
  category,
}: NewsEventCardProps): JSX.Element => {
  return (
    <S.NewsEventCardContainer to={route}>
      <S.CardThumbnail src={thumbnailUrl} alt={title} />
      <S.CardInfos>
        <S.CardDate>{createdDate}</S.CardDate>
        <S.CardTitle>{title}</S.CardTitle>
        <PostTypeBox type={category} />
      </S.CardInfos>
    </S.NewsEventCardContainer>
  );
};

export default NewsEventCard;
