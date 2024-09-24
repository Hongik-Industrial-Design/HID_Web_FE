/* eslint-disable react/prop-types */
import ProfessorCard from "./ProfessorCard/ProfessorCard";

import { FacultyGalleryGrid } from "./FacultyGallery.styled";

const FacultyGallery = ({ categorizedFaculty }) => {
  return (
    <FacultyGalleryGrid>
      {categorizedFaculty.map((professor) => (
        <ProfessorCard key={professor.id} professorInfo={professor} />
      ))}
    </FacultyGalleryGrid>
  );
};

export default FacultyGallery;
