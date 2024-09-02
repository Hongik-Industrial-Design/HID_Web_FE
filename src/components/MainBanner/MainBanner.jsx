import mainBanner from "@assets/main-banner.jpg";
import { BannerImg } from "./MainBanner.styled";

const MainBanner = () => {
  return (
    <>
      <BannerImg src={mainBanner} alt="main-banner-img" />
    </>
  );
};

export default MainBanner;
