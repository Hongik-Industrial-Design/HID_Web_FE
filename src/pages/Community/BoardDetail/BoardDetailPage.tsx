import { JSX } from 'react/jsx-runtime';

import { NoticeAuthor } from '../Community.types';

import PostTypeBox from '@components/PostTypeBox/PostTypeBox';

import * as S from './BoardDetailPage.styled';
import Breadscrumb from '@components/Breadscrumb/Breadscrumb';

// Mock Data
const detailInfos = {
  title:
    '[세종테크노파크] 홍익대학교 산업디자인과 세종RISE 센터 사업 대학생 대상 교육 수요조사 안내',
  date: '2024.03.02',
  viewCount: '123',
  author: 'TA' as NoticeAuthor,
  attatchment: '첨부파일',
};

const BoardDetailPage = (): JSX.Element => {
  return (
    <S.BoardDetailPageContainer>
      <S.BreadScrumbSection>
        <Breadscrumb
          paths={[{ content: 'Community', path: '/community' }]}
          currentPage="Notice"
        />
      </S.BreadScrumbSection>
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
    </S.BoardDetailPageContainer>
  );
};

export default BoardDetailPage;
