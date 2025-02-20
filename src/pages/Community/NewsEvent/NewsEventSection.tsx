import { JSX } from 'react/jsx-runtime';
import { useRef } from 'react';

import { NewsEventCardInfo } from '../Community.types';

import { NEWS_EVENT_CATEGORY } from '@constants/communityCategory';

import CategoryCommunity from '@components/CategoryCommunity/CategoryCommunity';
import ViewDetail from '@components/ViewDetail/ViewDetail';
import NewsEventCard from './Card/NewsEventCard';

import * as S from './NewsEventSection.styled';

interface NewsEventSectionProps {
  newsEventCardInfos: NewsEventCardInfo[];
}

const NewsEventSection = ({
  newsEventCardInfos,
}: NewsEventSectionProps): JSX.Element => {
  const newsEventTopRef = useRef<HTMLDivElement | null>(null);

  return (
    <S.NewsEventWrapper ref={newsEventTopRef}>
      <S.NewsEventCategoryContainer>
        <CategoryCommunity
          categoryList={NEWS_EVENT_CATEGORY}
          scrollToTopRef={newsEventTopRef}
        />
      </S.NewsEventCategoryContainer>

      {/* 게시글 Section */}
      <S.NewsEventContainer>
        <S.NewsEventTitleSection>
          <S.NewsEventTitle>
            News & Events<span>.</span>
          </S.NewsEventTitle>
          <ViewDetail route={'/community/news-event'} />
        </S.NewsEventTitleSection>
        {/* <S.BoldDivider /> */}
        <S.NewsEventCardGridContainer>
          <S.NewsEventCardGrid>
            {newsEventCardInfos.map((card) => (
              <S.NewsEventCardItem key={card.id}>
                <NewsEventCard
                  route={`news-event/${card.id}`}
                  imageURL={card.thumbnailUrl}
                  deadline={card.createdDate}
                  title={card.title}
                  category={card.category}
                />
              </S.NewsEventCardItem>
            ))}
          </S.NewsEventCardGrid>
        </S.NewsEventCardGridContainer>
      </S.NewsEventContainer>
    </S.NewsEventWrapper>
  );
};

export default NewsEventSection;
