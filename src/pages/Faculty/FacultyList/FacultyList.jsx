import { useEffect, useState } from "react";
import axios from "axios";

import Layout from "@layout/Layout";
import Category from "@components/Exhibition/Category/Category";
import FacultyGallery from "./FacultyGallery/FacultyGallery";

import {
  CategoryStickyContainer,
  FacultyListContainer,
  FacultyListPageWrapper,
  FacultyPageTitle,
} from "./FacultyList.styled";

const FacultyList = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [facultyList, setFacultyList] = useState([]);
  const [categorizedFaculty, setCategorizedFaculty] = useState([]);

  useEffect(() => {
    const fetchFacultyList = async () => {
      try {
        const response = await axios.get("/data/faculty.json");
        const facultyInfo = response.data;

        console.log(facultyInfo);

        setFacultyList(facultyInfo);
        setCategorizedFaculty(facultyInfo);
      } catch (error) {
        console.error("Error occured: ", error);
      }
    };

    fetchFacultyList();
  }, []);

  const handleFilterFaculty = (category) => {
    if (category === "All") {
      setCategorizedFaculty(facultyList);
    } else {
      const filteredFacultyList = facultyList.filter(
        (professor) => professor.info?.category === category
      );

      setCategorizedFaculty(filteredFacultyList);
    }
  };

  return (
    <Layout isHovered={isHovered} setIsHovered={setIsHovered}>
      <FacultyListPageWrapper>
        <CategoryStickyContainer>
          <Category handleFilter={handleFilterFaculty} />
        </CategoryStickyContainer>

        <FacultyListContainer>
          <FacultyPageTitle>
            Faculty<span>.</span>
          </FacultyPageTitle>

          <FacultyGallery categorizedFaculty={categorizedFaculty} />
        </FacultyListContainer>
      </FacultyListPageWrapper>
    </Layout>
  );
};

export default FacultyList;
