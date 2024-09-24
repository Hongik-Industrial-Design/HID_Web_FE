/* eslint-disable react/prop-types */
import { AnimatePresence } from "framer-motion";

import ProfessorCard from "./ProfessorCard/ProfessorCard";

import { FacultyGalleryGrid } from "./FacultyGallery.styled";

const FacultyGallery = ({ categorizedFaculty }) => {
  return (
    <FacultyGalleryGrid>
      <AnimatePresence>
        {categorizedFaculty.map((professor) => (
          <ProfessorCard key={professor.id} professorInfo={professor} />
        ))}
      </AnimatePresence>
    </FacultyGalleryGrid>
  );
};

export default FacultyGallery;
