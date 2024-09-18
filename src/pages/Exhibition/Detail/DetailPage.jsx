import { useState } from "react";
import { DetailPageContainer } from "./DetailPage.styled";

import Layout from "@layout/Layout";
import HeroSection from "@pages/Exhibition/Detail/HeroSection/HeroSection";
import ArtworkSection from "@pages/Exhibition/Detail/ArtworkSection/ArtworkSection";
import TeamMembersSection from "./TeamMemberSection/TeamMembersSection";

const DetailPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Layout isHovered={isHovered} setIsHovered={setIsHovered}>
      <DetailPageContainer>
        <HeroSection />
        <ArtworkSection />
        <TeamMembersSection />
      </DetailPageContainer>
    </Layout>
  );
};

export default DetailPage;
