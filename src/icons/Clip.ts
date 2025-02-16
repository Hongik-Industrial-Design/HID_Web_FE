import styled from 'styled-components';

import clipIcon from '@assets/svgs/notice/paper-clip.svg?react';

export const ClipIcon = styled(clipIcon)`
  width: 1.6rem;
  height: fit-content;
`;

// 게시글 상세 페이지 내 첨부파일 아이콘
export const ClipIconDetail = styled(clipIcon)`
  path {
    fill: ${({ theme }) => theme.colors.HID_Navy[900]};
  }
`;
