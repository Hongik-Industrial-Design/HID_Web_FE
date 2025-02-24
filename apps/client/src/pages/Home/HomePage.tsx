import { JSX } from 'react/jsx-runtime';

import OverviewSection from './OverviewSection/OverviewSection';

import homeBanner from '@assets/images//home-banner.jpg';

import * as S from './HomePage.styled';

const HomePage = (): JSX.Element => {
  return (
    <S.HomePageContainer>
      <S.BannerImage src={homeBanner} alt="home-banner" />
      <OverviewSection />
    </S.HomePageContainer>
  );
};

export default HomePage;
