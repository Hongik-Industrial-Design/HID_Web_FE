import Layout from "@layout/Layout";
import {
  CommunityPageContainer,
  EventSectionContainer,
  NewsSectionContainer,
  NoticeSectionContainer,
} from "./CommunityPage.styled";
import { useState } from "react";

const CommunityPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Layout isHovered={isHovered} setIsHovered={setIsHovered}>
      <CommunityPageContainer>
        <NewsSectionContainer></NewsSectionContainer>
        <EventSectionContainer></EventSectionContainer>
        <NoticeSectionContainer></NoticeSectionContainer>
      </CommunityPageContainer>
    </Layout>
  );
};

export default CommunityPage;
