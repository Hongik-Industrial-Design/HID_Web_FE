import { JSX } from 'react/jsx-runtime';

import { NoticeAuthor } from '../Community.types';

import Breadscrumb from '@components/Breadscrumb/Breadscrumb';
import PostTypeBox from '@components/PostTypeBox/PostTypeBox';

import * as S from './BoardDetailPage.styled';
import Attachment from '@components/Attachment/Attachment';

// Mock Data
const detailInfos = {
  title:
    '[세종테크노파크] 홍익대학교 산업디자인과 세종RISE 센터 사업 대학생 대상 교육 수요조사 안내',
  date: '2024.03.02',
  viewCount: '123',
  author: 'TA' as NoticeAuthor,
  attachment: [
    {
      url: 'https://HID_Notice.pdf',
      name: '기자재 대여 안내파일.docx',
    },
    {
      url: 'https://HID_Notice.pdf',
      name: 'PBL 신청 양식.pdf',
    },
    {
      url: 'https://HID_Notice.pdf',
      name: '과잠 시안 안내.png',
    },
    {
      url: 'https://HID_Notice.pdf',
      name: '부전공 신청 양식 모음.zip',
    },
  ],
};

const BoardDetailPage = (): JSX.Element => {
  return (
    <S.BoardDetailPageContainer>
      {/* BreadScrumb */}
      <S.BreadScrumbSection>
        <Breadscrumb
          paths={[{ content: 'Community', path: '/community' }]}
          currentPage="Notice"
        />
      </S.BreadScrumbSection>

      {/* Board Detail Header */}
      <S.BoardDetailHeaderContainer>
        <S.BoardTitleContainer>
          <PostTypeBox type={detailInfos.author} />
          <S.BoardTitle>{detailInfos.title}</S.BoardTitle>
        </S.BoardTitleContainer>
        <S.DateViewCountContainer>
          <S.BoardDate>{detailInfos.date}</S.BoardDate>
          <S.TinyDivider />
          <S.BoardViewCount>조회수 {detailInfos.viewCount}</S.BoardViewCount>
        </S.DateViewCountContainer>
      </S.BoardDetailHeaderContainer>
      <S.BoldDivider />

      {/* Article Section */}
      <S.AritcleSectionContainer>
        <S.AttachmentContainer>
          <Attachment
            fileCount={detailInfos.attachment.length}
            attachment={detailInfos.attachment}
          />
        </S.AttachmentContainer>
      </S.AritcleSectionContainer>
    </S.BoardDetailPageContainer>
  );
};

export default BoardDetailPage;
