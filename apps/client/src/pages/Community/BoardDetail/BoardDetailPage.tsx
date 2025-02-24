import { JSX } from 'react/jsx-runtime';

import { NoticeAuthor } from '../Community.types';

import Breadscrumb from '@components/Breadscrumb/Breadscrumb';
import PostTypeBox from '@components/PostTypeBox/PostTypeBox';
import Attachment from '@components/Attachment/Attachment';
import NextPreviousCommunity from '@components/NextPrevious/Community/NextPreviousCommunity';

import postImage from '@assets/images/board-detail-example.jpg';

import * as S from './BoardDetailPage.styled';

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
  image: postImage,
  content:
    '조사기간 : 2024. 11. 14.(목) ~ 2024. 11. 22.(금) 조사방법 : 네이버폼을 활용한 수요조사 추진 (https://naver.me/F9NGSC4o )',
};

const nextPreviousPostInfos = {
  previousPost: {
    title:
      '[세종테크노파크] 홍익대학교 산업디자인과 세종RISE 센터 사업 대학생 대상 교육 수요조사 안내',
    important: false,
  },
  nextPost: {
    title: '기자재 대여 안내',
    important: true,
  },
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

        {/* Content Section */}
        <S.PostContentSection>
          <S.PostImageContainer>
            <S.PostImage src={detailInfos.image} alt="Post Image Example" />
          </S.PostImageContainer>
          <S.PostText>
            조사기간 : 2024. 11. 14.(목) ~ 2024. 11. 22.(금) <br />
            조사방법 : 네이버폼을 활용한 수요조사 추진
            (https://naver.me/F9NGSC4o)
          </S.PostText>
        </S.PostContentSection>
      </S.AritcleSectionContainer>

      <S.PostFooterDivider />

      {/* Footer Section */}
      <S.PostFooterContainer>
        <NextPreviousCommunity
          previousPostTitle={nextPreviousPostInfos.previousPost}
          nextPostTitle={nextPreviousPostInfos.nextPost}
        />
      </S.PostFooterContainer>
    </S.BoardDetailPageContainer>
  );
};

export default BoardDetailPage;
