import * as S from './HomeBanner.styled';

import homeBanner from '@assets/images/banners/home-banner.jpg';
import homeBannerLogo from '@assets/icons/svgs/logos/homebanner-logo.svg';

const HomeBanner = () => {
  return (
    <S.BannerContainer>
      <S.BannerImage src={homeBanner} alt="home-banner" />
      <S.BannerLogo src={homeBannerLogo} alt="home-banner-logo" />
    </S.BannerContainer>
  );
};

export default HomeBanner;
