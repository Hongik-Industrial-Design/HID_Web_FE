import { JSX } from 'react/jsx-runtime';
import { useRef } from 'react';

import { NoticePreview } from '@schemas/community';

import CategoryCommunity from '@components/CategoryCommunity/CategoryCommunity';
import NoticeListItem from './Item/NoticeListItem';
import ViewDetail from '@components/ViewDetail/ViewDetail';

import * as S from './NoticeSection.styled';

interface NoticeSectionProps {
  noticeBoardData: NoticePreview[];
}

const NoticeSection = ({
  noticeBoardData,
}: NoticeSectionProps): JSX.Element => {
  const noticeCategory = ['All', 'College TA', 'Council'];

  const noticeTopRef = useRef<HTMLDivElement | null>(null);

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
            <ViewDetail route={'notice'} />
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
          {noticeBoardData?.map((notice) => (
            <S.BoardHeaderContainer key={notice.id}>
              <NoticeListItem
                id={notice.id}
                important={notice.important}
                title={notice.title}
                createdDate={notice.createdDate}
                author={notice.author}
                hasAttachment={notice.hasAttachment}
              />
              <S.ThinDivider />
            </S.BoardHeaderContainer>
          ))}
        </S.NoticeBoard>
      </S.NoticeContainer>
    </S.NoticeCategoryContainer>
  );
};

export default NoticeSection;
