import { useState } from "react";

import * as S from "./CommunityPage.styled";

import Layout from "@layout/Layout";
import NoticeSection from "./Notice/NoticeSection";

const CommunityPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Layout isHovered={isHovered} setIsHovered={setIsHovered}>
      <S.CommunityPageContainer>
        <NoticeSection />
        <S.NewsEventContainer></S.NewsEventContainer>
      </S.CommunityPageContainer>
    </Layout>
  );
};

export default CommunityPage;
