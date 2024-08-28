import mainBanner from "@assets/main-banner.jpg";
import { BannerImg } from "./MainBanner.styled";

const MainBanner = () => {
  return (
    <>
      <div className="container">
        <BannerImg src={mainBanner} alt="main-banner-img" />
      </div>
    </>
  );
};

export default MainBanner;
