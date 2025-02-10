import axios from 'axios';
import { JSX } from 'react/jsx-runtime';
import { useEffect, useRef, useState } from 'react';

import { NewsEventCardInfo } from '../Community.types';

import CategoryCommunity from '@components/CategoryCommunity/CategoryCommunity';
import NewsEventCard from './Card/NewsEventCard';

import * as S from './NewsEventSection.styled';

const NewsEventSection = (): JSX.Element => {
  const NewsEventCategory = ['All', 'Recruit', 'Award', 'Alumni'];

  const newsEventTopRef = useRef<HTMLDivElement | null>(null);

  const [newsEventCardInfos, setNewsEventCardInfos] = useState<
    NewsEventCardInfo[]
  >([]);

  useEffect(() => {
    const fetchNewsEventCardData = async () => {
      try {
        const response = await axios.get('/data/newsEvent.json');
        const newsEventCardData = response.data.data;
        console.log(newsEventCardData);

        setNewsEventCardInfos(newsEventCardData);
      } catch (error) {
        console.error('News & Event card data fetching error', error);
      }
    };

    fetchNewsEventCardData();
  }, []);

  return (
    <S.NewsEventWrapper ref={newsEventTopRef}>
      <S.NewsEventCategoryContainer>
        <CategoryCommunity
          categoryList={NewsEventCategory}
          ScrollToTopRef={newsEventTopRef}
        />
      </S.NewsEventCategoryContainer>
      <S.NewsEventContainer>
        <S.NewsEventTitleSection>
          <S.NewsEventTitle>
            News & Events<span>.</span>
          </S.NewsEventTitle>
          <S.NewsEventCardGridContainer>
            <S.BoldDivider />
            <S.NewsEventCardGrid>
              {newsEventCardInfos.map((card) => (
                <NewsEventCard
                  key={card.id}
                  route={`/news-event/${card.id}`}
                  imageURL={card.imgURL}
                  deadline={card.deadline}
                  title={card.title}
                  category={card.category}
                />
              ))}
            </S.NewsEventCardGrid>
          </S.NewsEventCardGridContainer>
        </S.NewsEventTitleSection>
      </S.NewsEventContainer>
    </S.NewsEventWrapper>
  );
};

export default NewsEventSection;
