import { JSX } from 'react/jsx-runtime';

import { useCommunityQuery } from '@api/query/communityQuery';
import { NewsEventCardInfo, NoticePostInfo } from './Community.types';

import NoticeSection from './Notice/NoticeSection';
import NewsEventSection from './NewsEvent/NewsEventSection';

import * as S from './CommunityPage.styled';
import Loading from '@components/Loading/Loading';

const CommunityPage = (): JSX.Element => {
  const {
    status,
    data: communityData = { notices: [], newsEvents: [] },
    error,
  } = useCommunityQuery();

  console.log('커뮤니티 페이지 Data: ', communityData);

  const noticeBoardData = communityData.notices as NoticePostInfo[];

  const newsEventCardInfos = communityData.newsEvents as NewsEventCardInfo[];

  return (
    <S.CommunityPageContainer $isPending={status === 'pending'}>
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
