import { AnimatePresence } from 'framer-motion';

import { FacultyInfos } from '../FacultyList.types';

import ProfessorCard from './ProfessorCard/ProfessorCard';

import * as S from './FacultyGallery.styled';

interface FacultyGalleryProps {
  categorizedFaculty: FacultyInfos[];
}

const FacultyGallery = ({
  categorizedFaculty,
}: FacultyGalleryProps): JSX.Element => {
  return (
    <S.FacultyGalleryGrid>
      <AnimatePresence>
        {categorizedFaculty.map((professor: FacultyInfos) => (
          <ProfessorCard key={professor.id} professorInfo={professor} />
        ))}
      </AnimatePresence>
    </S.FacultyGalleryGrid>
  );
};

export default FacultyGallery;
