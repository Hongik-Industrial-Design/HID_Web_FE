import { useState } from "react";

import Layout from "@layout/Layout";
import Category from "@components/Exhibition/Category/Category";
import FacultyGallery from "./FacultyGallery/FacultyGallery";

import {
  FacultyListContainer,
  FacultyListPageWrapper,
  FacultyPageTitle,
} from "./FacultyList.styled";

const FacultyList = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Layout isHovered={isHovered} setIsHovered={setIsHovered}>
      <FacultyListPageWrapper>
        <div className="category-margin">
          <Category />
        </div>
        <FacultyListContainer>
          <FacultyPageTitle>
            Faculty<span>.</span>
          </FacultyPageTitle>
          <FacultyGallery />
        </FacultyListContainer>
      </FacultyListPageWrapper>
    </Layout>
  );
};

export default FacultyList;
