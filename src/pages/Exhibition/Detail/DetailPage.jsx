import { DetailPageContainer } from "./DetailPage.styled";

import Header from "@layout/Header/Header";
import HeroSection from "@pages/Exhibition/Detail/HeroSection/HeroSection";
import ArtworkSection from "@pages/Exhibition/Detail/ArtworkSection/ArtworkSection";
import TeamMembersSection from "./TeamMemberSection/TeamMembersSection";
import Footer from "@layout/Footer/Footer";

const DetailPage = () => {
  return (
    <>
      <Header />
      <DetailPageContainer>
        <HeroSection />
        <ArtworkSection />
        <TeamMembersSection />
      </DetailPageContainer>
      <Footer />
    </>
  );
};

export default DetailPage;
