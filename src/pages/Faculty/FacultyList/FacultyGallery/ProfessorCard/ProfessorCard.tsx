import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';
import { motion } from 'framer-motion';

import { FacultyInfos } from '../../FacultyList.types';

import * as S from './ProfessorCard.styled';

type ProfessorCardProps = {
  professorInfo: FacultyInfos;
};

const ProfessorCard = ({ professorInfo }: ProfessorCardProps): JSX.Element => {
  const [isThumbnailHovered, setIsThumbnailHovered] = useState<boolean>(false);

  const handleThumbnailHover = () => setIsThumbnailHovered(true);
  const handleThumbnailLeave = () => setIsThumbnailHovered(false);

  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <S.ProfessorCardLink to={`/faculty/${professorInfo.id}`}>
        <S.ProfessorContainer
          onMouseEnter={handleThumbnailHover}
          onMouseLeave={handleThumbnailLeave}
        >
          <S.ProfessorThumbnail
            src={`/Faculty/${professorInfo.thumbnail}`}
            alt={professorInfo.info.name}
          />
          <S.ProfessorOverlay $isThumbnailHovered={isThumbnailHovered}>
            <S.OverlayName>{professorInfo.info.name}</S.OverlayName>
            <S.OverlayMajor>{professorInfo.info.major}</S.OverlayMajor>
          </S.ProfessorOverlay>
        </S.ProfessorContainer>
      </S.ProfessorCardLink>
    </motion.div>
  );
};

export default ProfessorCard;
