import { JSX } from 'react/jsx-runtime';

import OverviewSection from './OverviewSection/OverviewSection';

import homeBanner from '@assets/images/banners/home-banner.jpg';
import homeBannerLogo from '@assets/icons/svgs/logos/homebanner-logo.svg';

import * as S from './HomePage.styled';

const HomePage = (): JSX.Element => {
  return (
    <>
      <S.BannerContainer>
        <S.BannerImage src={homeBanner} alt="home-banner" />
        <S.BannerLogo src={homeBannerLogo} alt="home-banner-logo" />
      </S.BannerContainer>
      <OverviewSection />
    </>
  );
};

export default HomePage;
