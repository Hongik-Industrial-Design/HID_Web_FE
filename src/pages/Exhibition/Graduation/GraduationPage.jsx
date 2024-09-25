import { useState } from "react";
import { motion } from "framer-motion";

import Layout from "@layout/Layout";
import Exhibition from "@components/Exhibition/Exhibition";

import {
  GraduationBannerImg,
  GraduationPageContainer,
} from "./GraduationPage.styled";

import graduationBanner from "@assets/BannerImage/graduation-banner.jpg";

export const GraduationPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Layout isHovered={isHovered} setIsHovered={setIsHovered}>
      <GraduationPageContainer>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 14,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <GraduationBannerImg src={graduationBanner} alt="main-banner-img" />
        </motion.div>

        <Exhibition />
      </GraduationPageContainer>
    </Layout>
  );
};

export default GraduationPage;
