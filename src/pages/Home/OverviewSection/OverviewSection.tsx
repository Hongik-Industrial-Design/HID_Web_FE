import NextPrevious from '@components/NextPrevious/NextPrevious';
import HighlightSection from '../HighlightSection/HighlightSection';

import {
  IntroductionText,
  OverviewContainer,
  OverviewHeader,
} from './OverviewSection.styled';

const OverviewSection = (): JSX.Element => {
  return (
    <OverviewContainer>
      <OverviewHeader>
        <IntroductionText>
          About
          <br />
          Hongik Industrial Design<span>.</span>
        </IntroductionText>
        <NextPrevious />
      </OverviewHeader>
      <HighlightSection />
    </OverviewContainer>
  );
};

export default OverviewSection;
