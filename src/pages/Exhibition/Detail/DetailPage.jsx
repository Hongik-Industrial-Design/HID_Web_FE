import { DetailPageContainer } from "./DetailPage.styled";

import Header from "@components/Header/Header";
import HeroSection from "@components/HeroSection/HeroSection";
import VideoPlayer from "@components/VideoPlayer/VideoPlayer";


const DetailPage = () => {
  return (
    <>
      <Header />
      <DetailPageContainer>
        <HeroSection />
        <VideoPlayer />
      </DetailPageContainer>
    </>
  );
};

export default DetailPage;
