import axios from 'axios';
import { JSX } from 'react/jsx-runtime';
import { useEffect, useRef, useState } from 'react';

import { NEWS_EVENT_CATEGORY } from '@constants/communityCategory';
import {
  NewsEventCardInfo,
  NewsEventListInfo,
} from '@pages/Community/Community.types';

import CategoryCommunity from '@components/CategoryCommunity/CategoryCommunity';
import SearchBar from '@components/SearchBar/SearchBar';
import Pagination from '@components/Pagination/Pagination';
import NewsEventCard from '../Card/NewsEventCard';

import * as S from './NewsEventList.styled';

const NewsEventList = (): JSX.Element => {
  const newsEventTopRef = useRef<HTMLDivElement | null>(null);

  const [newsEventListInfos, setNewsEventListInfos] =
    useState<NewsEventListInfo | null>(null);

  const [pagePosts, setPagePosts] = useState<NewsEventCardInfo[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleCurrentPage = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const fetchNewsEventCardData = async () => {
      try {
        const response = await axios.get('/data/newsEventList.json');
        const newsEventListData = response.data;
        console.log(newsEventListData);

        setNewsEventListInfos(newsEventListData);

        if (newsEventListData && newsEventListData.cardInfos) {
          const indexOfLastPost = currentPage * newsEventListData?.pageSize;
          const indexOfFirstPost =
            indexOfLastPost - newsEventListData?.pageSize;

          const newsEventList = newsEventListData?.cardInfos;
          console.log(newsEventList);

          const currentPageList = newsEventList?.slice(
            indexOfFirstPost,
            indexOfLastPost
          );

          setPagePosts(currentPageList);
        }
      } catch (error) {
        console.error('News & Event card data fetching error', error);
      }
    };
    fetchNewsEventCardData();
  }, [currentPage]);

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
          <SearchBar placeholder="Search" />
        </S.NewsEventTitleSection>
        {/* <S.BoldDivider /> */}
        <S.NewsEventCardGridContainer>
          <S.NewsEventCardGrid>
            {newsEventListInfos?.cardInfos &&
              pagePosts.map((card) => (
                <S.NewsEventCardItem key={card.id}>
                  <NewsEventCard
                    route={`/community/news-event/${card.id}`}
                    imageURL={card.imgURL}
                    deadline={card.deadline}
                    title={card.title}
                    category={card.category}
                  />
                </S.NewsEventCardItem>
              ))}
          </S.NewsEventCardGrid>
        </S.NewsEventCardGridContainer>
        <S.PaginationContainer>
          <Pagination
            currentPage={currentPage}
            handleCurrentPage={handleCurrentPage}
            totalPages={newsEventListInfos?.totalPages}
            isPreview={true}
          />
        </S.PaginationContainer>
      </S.NewsEventContainer>
    </S.NewsEventWrapper>
  );
};

export default NewsEventList;
