import { useState } from "react";

import Layout from "@layout/Layout";
import Category from "@components/Exhibition/Category/Category";

import {
  FacultyListContainer,
  FacultyMainContent,
  FacultyPageTitle,
} from "./FacultyList.styled";

const FacultyList = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Layout isHovered={isHovered} setIsHovered={setIsHovered}>
      <FacultyListContainer>
        <FacultyPageTitle>
          Faculty<span>.</span>
        </FacultyPageTitle>
        <FacultyMainContent>
          <Category />
        </FacultyMainContent>
      </FacultyListContainer>
      ;
    </Layout>
  );
};

export default FacultyList;
