import HighlightSection from "../HighlightSection/HighlightSection";

import { IntroductionText, OverviewContainer } from "./OverviewSection.styled";

const OverviewSection = () => {
  return (
    <OverviewContainer>
      <IntroductionText>
        About
        <br />
        Hongik Industrial Design<span>.</span>
      </IntroductionText>
      <HighlightSection />
    </OverviewContainer>
  );
};

export default OverviewSection;
