import { JSX } from 'react/jsx-runtime';

import NoticeSection from './Notice/NoticeSection';
import NewsEventSection from './NewsEvent/NewsEventSection';

import * as S from './CommunityPage.styled';

const CommunityPage = (): JSX.Element => {
  return (
    <S.CommunityPageContainer>
      <NoticeSection />
      <NewsEventSection />
    </S.CommunityPageContainer>
  );
};

export default CommunityPage;
