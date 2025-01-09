import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

import * as S from './ProfessorCard.styled';

const ProfessorCard = ({ professorInfo }) => {
  const [thumbnailHovered, setThumbnailHovered] = useState(false);

  const navigate = useNavigate();

  const goToProfessorProfile = (id) => {
    navigate(`/faculty/${id}`);
  };

  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <S.ProfessorContainer
        onClick={() => goToProfessorProfile(professorInfo.id)}
        onMouseEnter={() => setThumbnailHovered(true)}
        onMouseLeave={() => setThumbnailHovered(false)}
      >
        <S.ProfessorThumbnail
          src={`/Faculty/${professorInfo.thumbnail}`}
          alt={professorInfo.info.name}
        />
        <S.ProfessorOverlay $isThumbnailHovered={thumbnailHovered}>
          <h2 className="name">{professorInfo.info.name}</h2>
          <h3 className="major">{professorInfo.info.major}</h3>
        </S.ProfessorOverlay>
      </S.ProfessorContainer>
    </motion.div>
  );
};

export default ProfessorCard;
