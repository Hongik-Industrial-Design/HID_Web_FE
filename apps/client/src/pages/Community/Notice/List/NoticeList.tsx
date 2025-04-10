import { JSX } from 'react/jsx-runtime';
import { useRef, useState } from 'react';

import { useNoticeListQuery } from '@api/query/communityQuery';
import { NOTICE_CATEGORY } from '@constants/communityCategory';

import { NoticeContent } from '@schemas/community';

import CategoryCommunity from '@components/CategoryCommunity/CategoryCommunity';
import NoticeListItem from '../Item/NoticeListItem';
import SearchBar from '@components/SearchBar/SearchBar';
import Pagination from '@components/Pagination/Pagination';
import Loading from '@components/Loading/Loading';

import * as S from './NoticeList.styled';

const NoticeList = (): JSX.Element => {
  const noticeTopRef = useRef<HTMLDivElement | null>(null);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleCurrentPage = (page: number) => setCurrentPage(page);

  const { status, data, error } = useNoticeListQuery(currentPage, 10);

  const noticeList = data ? (data.content as NoticeContent[]) : [];
  console.log('공지사항 목록 조회 API 응답 데이터: ', noticeList);

  // 중요 공지사항 우선순위 정렬
  const importantAscendingNoticeList = [...noticeList].sort((a, b) => {
    return Number(b.important) - Number(a.important);
  });

  const totalPages = data ? data.pageInfo.totalPages : 0;

  return (
    <S.NoticeListWrapper>
      <S.NoticeCategoryContainer ref={noticeTopRef}>
        <S.CategoryStickyContainer>
          <CategoryCommunity
            categoryList={NOTICE_CATEGORY}
            scrollToTopRef={noticeTopRef}
          />
        </S.CategoryStickyContainer>
        <S.NoticeContainer>
          <S.NoticeHeader>
            <S.NoticeTitleContainer>
              <S.NoticeTitle>
                Notice<span>.</span>
              </S.NoticeTitle>
              <SearchBar placeholder="Search" />
            </S.NoticeTitleContainer>
            <S.BoldDivider />
          </S.NoticeHeader>

          {/* 제목, 공지 일자, 작성자, 첨부파일 */}
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
          {status === 'pending' ? (
            <S.NoticeBoard>
              <Loading />
            </S.NoticeBoard>
          ) : status === 'error' ? (
            <span>Error: {error?.message}</span>
          ) : (
            <>
              {/* 공지사항 목록 */}
              {importantAscendingNoticeList?.map((notice) => (
                <S.NoticeBoard key={notice.id}>
                  <NoticeListItem
                    id={notice.id}
                    important={notice.important}
                    title={notice.title}
                    createdDate={notice.createdDate}
                    author={notice.author}
                    hasAttachment={notice.hasAttachment}
                  />
                  <S.ThinDivider />
                </S.NoticeBoard>
              ))}
              {/* Pagination */}
              <S.PaginationWrapper>
                <Pagination
                  currentPage={currentPage}
                  handleCurrentPage={handleCurrentPage}
                  totalPages={totalPages}
                  isPreview={true}
                />
              </S.PaginationWrapper>
            </>
          )}
        </S.NoticeContainer>
      </S.NoticeCategoryContainer>
    </S.NoticeListWrapper>
  );
};

export default NoticeList;
