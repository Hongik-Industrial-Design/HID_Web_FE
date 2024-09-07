import { DetailPageContainer } from "./DetailPage.styled";

import Header from "@components/Header/Header";
import HeroSection from "@components/HeroSection/HeroSection";
import ArtworkSection from "@components/ArtworkSection/ArtworkSection";

const DetailPage = () => {
  return (
    <>
      <Header />
      <DetailPageContainer>
        <HeroSection />
        <ArtworkSection />
      </DetailPageContainer>
    </>
  );
};

export default DetailPage;
