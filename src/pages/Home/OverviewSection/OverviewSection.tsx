import { JSX } from 'react/jsx-runtime';

import NextPrevious from '@components/NextPrevious/NextPrevious';
import HighlightSection from '../HighlightSection/HighlightSection';

import * as S from './OverviewSection.styled';

const OverviewSection = (): JSX.Element => {
  return (
    <S.OverviewContainer>
      <S.OverviewHeader>
        <S.IntroductionText>
          About
          <br />
          Hongik Industrial Design<span>.</span>
        </S.IntroductionText>
        <NextPrevious />
      </S.OverviewHeader>
      <HighlightSection />
    </S.OverviewContainer>
  );
};

export default OverviewSection;
