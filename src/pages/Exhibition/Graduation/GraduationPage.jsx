import { useState } from "react";

import Layout from "@layout/Layout";
import MainBanner from "@components/MainBanner/MainBanner";
import Exhibition from "@components/Exhibition/Exhibition";

export const GraduationPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Layout isHovered={isHovered} setIsHovered={setIsHovered}>
      <MainBanner />
      <Exhibition />
    </Layout>
  );
};

export default GraduationPage;
