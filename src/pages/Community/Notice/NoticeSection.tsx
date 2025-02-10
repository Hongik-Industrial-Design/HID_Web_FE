import axios from 'axios';
import { JSX } from 'react/jsx-runtime';
import { useEffect, useRef, useState } from 'react';

import { NoticeInfos, NoticePostInfo } from '../Community.types';

import CategoryCommunity from '@components/CategoryCommunity/CategoryCommunity';
import ImportantBox from '@components/ImportantBox/ImportantBox';
import Pagination from '@components/Pagination/Pagination';

import * as S from './NoticeSection.styled';
import AuthorBox from '@components/AuthorBox/AuthorBox';

const NoticeSection = (): JSX.Element => {
  const noticeTopRef = useRef<HTMLDivElement | null>(null);

  const [noticeData, setNoticeData] = useState<NoticeInfos | null>(null);
  const [pagePosts, setPagePosts] = useState<NoticePostInfo[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const noticeCategory = ['All', 'College TA', 'Council'];

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

  const handleCurrentPage = (page: number) => {
    setCurrentPage(page);
  };

  // Clip Icon 클릭 시 첨부 파일 다운로드 logic
  const handleDownload = (postID: number) => {
    // 다운로드할 파일의 게시물 filtering

    if (noticeData?.posts) {
      const [targetPost] = noticeData.posts.filter(
        (post) => post.id === postID
      );
      console.log(targetPost);

      // 서버에 저장된 첨부 파일의 URL과 파일명
      const fileURL = targetPost.credit?.attatchment.url;
      console.log(fileURL);

      const fileName = targetPost.credit?.attatchment.name;
      console.log(fileName);

      // FE Test를 위한 Blob 객체 사용 구현
      const blob = new Blob([fileURL], { type: 'application/pdf' }); // Blob 객체 생성

      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob); // Blob을 가리키는 URL 생성
      link.download = fileName; // 파일명 설정
      document.body.appendChild(link);
      link.click(); // 다운로드 트리거
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href); // 메모리 해제

      /* // <a> 태그를 동적으로 생성하여 파일 다운로드를 Trigger (Content-Disposition: attatchment 서버에서 설정 필요)
      const link = document.createElement("a");
      link.href = fileURL;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      */
    }
  };

  return (
    <S.NoticeCategoryContainer ref={noticeTopRef}>
      <S.CategoryStickyContainer>
        <CategoryCommunity
          categoryList={noticeCategory}
          ScrollToTopRef={noticeTopRef}
        />
      </S.CategoryStickyContainer>
      <S.NoticeContainer>
        <S.NoticeHeader>
          <S.NoticeTitle>
            Notice<span>.</span>
          </S.NoticeTitle>
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
                <S.NoticeBoardPostRow>
                  <S.PostTitleContainer>
                    <S.PostLink href={`/notice/${notice.id}`}>
                      {notice.important && (
                        <>
                          <ImportantBox />
                          <S.TinyDivider />
                        </>
                      )}
                      <S.PostTitle>{notice.title}</S.PostTitle>
                    </S.PostLink>
                  </S.PostTitleContainer>
                  <S.NoticeBoardCredit>
                    <S.UploadDate>{notice.credit.postDate}</S.UploadDate>
                    <S.AuthorBoxArea>
                      <AuthorBox author={notice.credit.author} />
                    </S.AuthorBoxArea>
                    <S.ClipIconContainer>
                      {notice.credit.attatchment ? (
                        <S.ClipIconButton
                          onClick={() => handleDownload(notice.id)}
                        >
                          <S.ClipIcon />
                        </S.ClipIconButton>
                      ) : (
                        '-'
                      )}
                    </S.ClipIconContainer>
                  </S.NoticeBoardCredit>
                </S.NoticeBoardPostRow>
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
