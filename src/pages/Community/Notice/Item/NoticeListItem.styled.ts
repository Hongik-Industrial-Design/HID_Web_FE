import styled from 'styled-components';
import { Link } from 'react-router';

import {
  creditWidthStyles,
  NoticeBoardRowStyles,
} from '../NoticeSection.styled';

// 게시글 Section
export const NoticeBoardPostRow = styled.div`
  ${NoticeBoardRowStyles}
  margin: 3.2rem 0;
`;

export const PostTitleContainer = styled.div`
  width: 60%;
  height: fit-content;
`;

export const PostLink = styled(Link)`
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

export const NoticeBoardCredit = styled.div`
  flex-grow: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;
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
