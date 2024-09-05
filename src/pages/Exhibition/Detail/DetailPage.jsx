import Header from "@components/Header/Header";
import { DetailPageContainer } from "./DetailPage.styled";
import HeroSection from "@components/HeroSection/HeroSection";

const DetailPage = () => {
  return (
    <>
      <Header />
      <DetailPageContainer>
        <HeroSection />
      </DetailPageContainer>
    </>
  );
};

export default DetailPage;