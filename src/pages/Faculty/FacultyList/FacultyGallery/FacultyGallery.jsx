import { useEffect, useState } from "react";
import axios from "axios";

import { FacultyGalleryGrid } from "./FacultyGallery.styled";

import ProfessorCard from "./ProfessorCard/ProfessorCard";

const FacultyGallery = () => {
  const [facultyList, setFacultyList] = useState([]);

  // Fetching Faculty Infos
  useEffect(() => {
    const fetchFacultyList = async () => {
      try {
        const response = await axios.get("/data/faculty.json");
        const facultyInfo = response.data;

        console.log(facultyInfo);

        setFacultyList(facultyInfo);
      } catch (error) {
        console.error("Error occured: ", error);
      }
    };

    fetchFacultyList();
  }, []);

  return (
    <FacultyGalleryGrid>
      {facultyList.map((professor) => (
        <ProfessorCard key={professor.id} professorInfo={professor} />
      ))}
    </FacultyGalleryGrid>
  );
};

export default FacultyGallery;
