import { useState } from "react";

import Layout from "@layout/Layout";
import HomeBanner from "@components/HomeBanner/HomeBanner";
import OverviewSection from "./OverviewSection/OverviewSection";

const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Layout isHovered={isHovered} setIsHovered={setIsHovered}>
      <HomeBanner />
      <OverviewSection />
    </Layout>
  );
};

export default HomePage;
