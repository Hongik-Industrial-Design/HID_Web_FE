import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

import * as S from './CommunityPage.styled';

import NoticeSection from './Notice/NoticeSection';
import CategoryCommunity from '@components/CategoryCommunity/CategoryCommunity';
import NewsEventCard from './NewsEvent/NewsEventCard';

const CommunityPage = () => {
  const [newsEventCardInfos, setNewsEventCardInfos] = useState([]);

  const newsEventTopRef = useRef(null);

  const NewsEventCategory = ['All', 'Recruit', 'Award', 'Alumni'];

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
    <S.CommunityPageContainer>
      <NoticeSection />

      {/* News & Event Section */}
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
              News & Event <span className="dot">.</span>
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
    </S.CommunityPageContainer>
  );
};

export default CommunityPage;
