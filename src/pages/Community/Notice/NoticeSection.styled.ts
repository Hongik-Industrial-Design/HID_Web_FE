import styled, { css } from 'styled-components';

export const NoticeCategoryContainer = styled.section`
  width: 100%;
  height: fit-content;
  padding-top: 6.8rem;

  display: flex;
  gap: 23.3rem;
`;

export const CategoryStickyContainer = styled.div`
  position: relative;
  margin: 10rem 0;
`;

export const NoticeContainer = styled.section`
  flex-grow: 1;

  width: 100%;
  height: fit-content;
`;

// 게시판 Header
export const NoticeHeader = styled.section`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const BoldDivider = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.HID_Grayscale[800]};
`;

export const NoticeTitle = styled.h2`
  ${({ theme }) => theme.fontStyles.Header1}
  color: ${({ theme }) => theme.colors.HID_Grayscale[800]};

  span {
    color: ${({ theme }) => theme.colors.HID_YellowDot};
  }
`;

// 게시판 Main
export const NoticeBoard = styled.section`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
`;

// Board Header
export const BoardHeaderContainer = styled.section`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
`;

const NoticeBoardRowStyles = css`
  width: 100%;
  height: fit-content;
  padding-right: 4.4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  white-space: nowrap;
`;

const BoardHeaderStyles = css`
  ${({ theme }) => theme.fontStyles.Body3}
  letter-spacing: -0.28px;
  color: ${({ theme }) => theme.colors.HID_Grayscale[900]};
`;

export const NoticeBoardHeaderRow = styled.div`
  ${NoticeBoardRowStyles}
  margin: 2.8rem 0;

  ${BoardHeaderStyles}
`;

// Title Header
export const BoardTitle = styled.span`
  width: 60%;
  height: fit-content;

  font-weight: 700;
`;

// Credit Header
export const NoticeBoardCredit = styled.div`
  flex-grow: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const creditWidthStyles = css`
  flex: 1;
  text-align: center;
`;

export const UploadDateTitle = styled.span`
  ${creditWidthStyles}
`;

export const AuthorTitle = styled.span`
  ${creditWidthStyles}
`;

export const AttatchmentTitle = styled.span`
  ${creditWidthStyles}
`;

// 게시글 Section
export const NoticeBoardPostRow = styled.div`
  ${NoticeBoardRowStyles}
  margin: 3.2rem 0;
`;

export const PostTitleContainer = styled.div`
  width: 60%;
  height: fit-content;
`;

export const PostLink = styled.a`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

// 중요 공지 Box 우측 Divider
export const TinyDivider = styled.div`
  width: 1px;
  height: 1.4rem;

  background-color: ${({ theme }) => theme.colors.HID_Grayscale[200]};
`;

// 게시글 제목
export const PostTitle = styled.span`
  ${({ theme }) => theme.fontStyles.Body3_KO}
  color: ${({ theme }) => theme.colors.HID_Grayscale[800]};

  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UploadDate = styled.span`
  ${creditWidthStyles}

  ${({ theme }) => theme.fontStyles.Body3_KO}
  color: ${({ theme }) => theme.colors.HID_Grayscale[500]};
`;

export const Author = styled.span`
  ${creditWidthStyles}
`;

export const Attatchment = styled.span`
  ${creditWidthStyles}
`;

// Author Box 영역
export const AuthorBoxArea = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// 첨부파일 영역
export const ClipIconContainer = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ClipIconButton = styled.button`
  width: 2.4rem;
  height: 2.4rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// 게시글 하단 Divider (Unit)
export const ThinDivider = styled.div`
  width: 100%;
  height: 1px;

  background-color: ${({ theme }) => theme.colors.HID_Grayscale[200]};
`;

export const PaginationWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  margin-top: 4.8rem;
  padding-left: 1.6rem;
`;
