import { BannerContainer, BannerImage, BannerLogo } from "./HomeBanner.styled";

import homeBanner from "@assets/home-banner.jpg";
import homeBannerLogo from "@assets/homebanner-logo.svg";

const HomeBanner = () => {
  return (
    <BannerContainer>
      <BannerImage src={homeBanner} alt="home-banner" />
      <BannerLogo src={homeBannerLogo} alt="home-banner-logo" />
    </BannerContainer>
  );
};

export default HomeBanner;
