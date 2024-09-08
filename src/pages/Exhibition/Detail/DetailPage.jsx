import { DetailPageContainer } from "./DetailPage.styled";

import Layout from "@layout/Layout";
import HeroSection from "@pages/Exhibition/Detail/HeroSection/HeroSection";
import ArtworkSection from "@pages/Exhibition/Detail/ArtworkSection/ArtworkSection";
import TeamMembersSection from "./TeamMemberSection/TeamMembersSection";

const DetailPage = () => {
  return (
    <Layout>
      <DetailPageContainer>
        <HeroSection />
        <ArtworkSection />
        <TeamMembersSection />
      </DetailPageContainer>
    </Layout>
  );
};

export default DetailPage;
