import { useState } from "react";

import Exhibition from "@components/Exhibition/Exhibition";
import Footer from "@components/Footer/Footer";
import Header from "@components/Header/Header";
import MainBanner from "@components/MainBanner/MainBanner";

export const GraduationPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Header setIsHovered={setIsHovered} isHovered={isHovered} />
      <MainBanner />
      <Exhibition />
      <Footer />
    </>
  );
};

export default GraduationPage;
