import { BannerImg } from "./MainBanner.styled";

import mainBanner from "@assets/main-banner.jpg";

const MainBanner = () => {
  return (
    <>
      <BannerImg src={mainBanner} alt="main-banner-img" />
    </>
  );
};

export default MainBanner;
