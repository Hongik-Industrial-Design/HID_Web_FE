import Layout from "@layout/Layout";
import HomeBanner from "@components/HomeBanner/HomeBanner";
import OverviewSection from "./OverviewSection/OverviewSection";

const HomePage = () => {
  return (
    <Layout>
      <HomeBanner />
      <OverviewSection />
    </Layout>
  );
};

export default HomePage;
