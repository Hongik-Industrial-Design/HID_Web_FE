import { JSX } from 'react/jsx-runtime';

import { useCommunityQuery } from '@api/query/communityQuery';

import { NewsEventPreview, NoticePreview } from '@schemas/community';

import Loading from '@components/Loading/Loading';
import NoticeSection from './Notice/NoticeSection';
import NewsEventSection from './NewsEvent/NewsEventSection';

import * as S from './CommunityPage.styled';

const CommunityPage = (): JSX.Element => {
  const {
    status,
    data: communityData = { notices: [], newsEvents: [] },
    error,
  } = useCommunityQuery();

  console.log('커뮤니티 페이지 Data: ', communityData);

  const noticeBoardData = communityData.notices as NoticePreview[];

  const newsEventCardInfos = communityData.newsEvents as NewsEventPreview[];

  return (
    <S.CommunityPageContainer
      $isPending={status === 'pending' || status === 'error'}
    >
      {status === 'pending' ? (
        <Loading />
      ) : status === 'error' ? (
        <span>Error: {error.message}</span>
      ) : (
        <>
          <NoticeSection noticeBoardData={noticeBoardData} />
          <NewsEventSection newsEventCardInfos={newsEventCardInfos} />
        </>
      )}
    </S.CommunityPageContainer>
  );
};

export default CommunityPage;
