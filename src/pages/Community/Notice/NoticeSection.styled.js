import styled from "styled-components";
import { colors } from "@styles/theme/colors";

import clipIcon from "@assets/svgs/paper-clip.svg?react";
import alarmIcon from "@assets/svgs/alarm.svg?react";

export const NoticeCategoryContainer = styled.div`
  display: flex;
  gap: 180px;
`;

export const CategoryStickyContainer = styled.div`
  position: relative;
  margin-top: 100px;
`;

export const NoticeContainer = styled.div`
  width: 100%;
  min-width: 1080px;
  max-width: 1520px;
`;

export const NoticeHeader = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 30px;

  .bold-divider {
    width: 100%;
    height: 4px;
    background-color: ${colors.HID_Grayscale[800]};
  }
`;

export const NoticeTitle = styled.h2`
  ${({ theme }) => theme.fontStyles.Header1}
  letter-spacing: -0.28px;
  color: ${colors.HID_Grayscale[800]};

  span {
    color: ${colors.HID_YellowDot};
  }
`;

// 게시판 Main
export const NoticeBoard = styled.div`
  width: 100%;
  margin-top: 32px;

  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const BoardHeaderContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const NoticeBoardRow = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.28px;
  color: ${colors.HID_Grayscale[900]};

  white-space: nowrap;
`;

export const BoardTitle = styled.div`
  width: 50%;
  font-weight: 600;
`;

export const NoticeBoardCredit = styled.div`
  width: 40%;
  padding-right: 64px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 42px;
`;

export const PostTitleContainer = styled.a`
  width: 50%;

  display: flex;
  align-items: center;
  gap: 6px;

  font-weight: 600;
`;

export const PostTitle = styled.p`
  font-weight: 400;

  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
`;

export const UploadDate = styled.div`
  flex: 1;
  text-align: center;
`;

export const Author = styled.div`
  flex: 1;
  text-align: center;
`;

export const Attatchment = styled.div`
  flex: 1;
  text-align: center;
`;

export const AuthorBox = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
`;

export const PostAuthor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 4px 16px;
  border-radius: 2px;
  background-color: #e7eaf5;
  color: ${colors.HID_Navy[900]};
`;

export const ClipIconContainer = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ClipIconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ClipIcon = styled(clipIcon)`
  cursor: pointer;
`;

export const ImportantText = styled.div`
  display: flex;
  align-items: center;

  font-weight: 600;
  padding: 4px;
  border: 1px dashed ${colors.HID_Grayscale[200]};

  /* span {
    color: ${colors.HID_Navy[900]};
  } */
`;

export const AlarmIcon = styled(alarmIcon)`
  #alarm_2 {
    fill: #e70000;
  }
`;

export const ThinDivider = styled.div`
  width: 100%;
  height: 1px;

  background-color: ${colors.HID_Grayscale[200]};
`;

export const PaginationWrapper = styled.div`
  margin-top: 48px;
  padding-left: 16px;
`;
