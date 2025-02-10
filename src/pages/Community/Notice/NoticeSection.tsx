import axios from 'axios';
import { JSX } from 'react/jsx-runtime';
import { useEffect, useRef, useState } from 'react';

import { NoticeInfos, NoticePostInfo } from '../Community.types';

import CategoryCommunity from '@components/CategoryCommunity/CategoryCommunity';
import NoticeListItem from './Item/NoticeListItem';
import ViewDetail from '@components/ViewDetail/ViewDetail';
import Pagination from '@components/Pagination/Pagination';

import * as S from './NoticeSection.styled';

const NoticeSection = (): JSX.Element => {
  const noticeCategory = ['All', 'College TA', 'Council'];

  const noticeTopRef = useRef<HTMLDivElement | null>(null);

  const [noticeData, setNoticeData] = useState<NoticeInfos | null>(null);
  const [pagePosts, setPagePosts] = useState<NoticePostInfo[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleCurrentPage = (page: number) => {
    setCurrentPage(page);
  };

  // Notice Data Fetching & Sorting (important: true 순으로 정렬)
  useEffect(() => {
    const fetchAndSortNoticeData = async () => {
      try {
        const response = await axios.get('/data/notice.json');
        const noticeContent = response.data;
        console.log(noticeContent);

        setNoticeData(noticeContent);

        // 데이터가 존재할 때, important: true 순으로 정렬
        if (noticeContent && noticeContent.posts) {
          const indexOfLastPost = currentPage * noticeContent?.pageSize;
          const indexOfFirstPost = indexOfLastPost - noticeContent?.pageSize;

          const noticePosts = noticeContent?.posts;
          console.log(noticePosts);

          const sortedbyImportant = [...noticePosts].sort((a, b) => {
            return b.important - a.important;
          });

          const currentPosts = sortedbyImportant?.slice(
            indexOfFirstPost,
            indexOfLastPost
          );

          setPagePosts(currentPosts);
        }
      } catch (error) {
        console.error('Notice Data Fetching Error', error);
      }
    };

    fetchAndSortNoticeData();
  }, [currentPage]);

  return (
    <S.NoticeCategoryContainer ref={noticeTopRef}>
      <S.CategoryStickyContainer>
        <CategoryCommunity
          categoryList={noticeCategory}
          scrollToTopRef={noticeTopRef}
        />
      </S.CategoryStickyContainer>
      <S.NoticeContainer>
        <S.NoticeHeader>
          <S.NoticeTitleContainer>
            <S.NoticeTitle>
              Notice<span>.</span>
            </S.NoticeTitle>
            <ViewDetail route={'/community/notice'} />
          </S.NoticeTitleContainer>
          <S.BoldDivider />
        </S.NoticeHeader>

        {/* 제목, 공지 일자, 작성자, 첨부파일 */}
        <S.NoticeBoard>
          <S.BoardHeaderContainer>
            <S.NoticeBoardHeaderRow>
              <S.BoardTitle>제목</S.BoardTitle>
              <S.NoticeBoardCredit>
                <S.UploadDateTitle>공지 일자</S.UploadDateTitle>
                <S.AuthorTitle>작성자</S.AuthorTitle>
                <S.AttatchmentTitle>첨부 파일</S.AttatchmentTitle>
              </S.NoticeBoardCredit>
            </S.NoticeBoardHeaderRow>
            <S.ThinDivider />
          </S.BoardHeaderContainer>

          {/* 게시글 목록 */}
          {noticeData &&
            pagePosts?.map((notice) => (
              <S.BoardHeaderContainer key={notice.id}>
                <NoticeListItem
                  id={notice.id}
                  important={notice.important}
                  title={notice.title}
                  date={notice.credit.postDate}
                  author={notice.credit.author}
                  attatchment={notice.credit.attatchment}
                />
                <S.ThinDivider />
              </S.BoardHeaderContainer>
            ))}
        </S.NoticeBoard>

        {/* Pagination Component */}
        <S.PaginationWrapper>
          <Pagination
            currentPage={currentPage}
            handleCurrentPage={handleCurrentPage}
            totalPages={noticeData?.totalPages}
            isPreview={true}
          />
        </S.PaginationWrapper>
      </S.NoticeContainer>
    </S.NoticeCategoryContainer>
  );
};

export default NoticeSection;
