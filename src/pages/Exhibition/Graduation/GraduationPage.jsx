import { useState } from "react";

import Layout from "@layout/Layout";
import Exhibition from "@components/Exhibition/Exhibition";

import { GraduationBannerImg } from "./GraduationPage.styled";

import graduationBanner from "@assets/BannerImage/graduation-banner.jpg";

export const GraduationPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Layout isHovered={isHovered} setIsHovered={setIsHovered}>
      <GraduationBannerImg src={graduationBanner} alt="main-banner-img" />
      <Exhibition />
    </Layout>
  );
};

export default GraduationPage;
