import { JSX } from 'react/jsx-runtime';
import { useRef, useState } from 'react';

import { useNewsEventListQuery } from '@api/query/communityQuery';

import { NEWS_EVENT_CATEGORY } from '@constants/communityCategory';

import { NewsEventContent } from '@schemas/community';

import Loading from '@components/Loading/Loading';
import CategoryCommunity from '@components/Category/Community/CategoryCommunity';
import SearchBar from '@components/SearchBar/SearchBar';
import Pagination from '@components/Pagination/Pagination';
import NewsEventCard from '../Card/NewsEventCard';

import * as S from './NewsEventList.styled';

const NewsEventList = (): JSX.Element => {
  const newsEventTopRef = useRef<HTMLDivElement | null>(null);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const handleCurrentPage = (page: number) => setCurrentPage(page);

  // News & Event List API 호출
  const { status, data, error } = useNewsEventListQuery(currentPage, 10);

  const newsEventListInfos = data ? (data.content as NewsEventContent[]) : [];
  const totalPages = data ? data.pageInfo.totalPages : 1;

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

        {status === 'pending' ? (
          <Loading />
        ) : status === 'error' ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            {' '}
            <S.NewsEventCardGridContainer>
              <S.NewsEventCardGrid>
                {newsEventListInfos?.map((card) => (
                  <S.NewsEventCardItem key={card.id}>
                    <NewsEventCard
                      route={`${card.id}`}
                      thumbnailUrl={card.thumbnailUrl}
                      createdDate={card.createdDate}
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
                totalPages={totalPages}
                isPreview={true}
              />
            </S.PaginationContainer>
          </>
        )}
      </S.NewsEventContainer>
    </S.NewsEventWrapper>
  );
};

export default NewsEventList;
