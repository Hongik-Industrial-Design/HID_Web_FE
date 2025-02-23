import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';
import { motion } from 'framer-motion';

import { FacultyInfos } from '../../FacultyList.types';

import * as S from './ProfessorCard.styled';
import CardOverlayBackground from '@components/CardOverlay/Background/CardOverlayBackground';
import CardOverlayText from '@components/CardOverlay/Text/CardOverlayText';

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
      <S.ProfessorCardLink
        to={`/faculty/${professorInfo.id}`}
        onMouseEnter={handleThumbnailHover}
        onMouseLeave={handleThumbnailLeave}
      >
        <CardOverlayBackground
          bgDirection="horizontal"
          isThumbnailHovered={isThumbnailHovered}
        >
          <>
            <S.ProfessorThumbnail
              src={`/Faculty/${professorInfo.thumbnail}`}
              alt={professorInfo.info.name}
            />
            <CardOverlayText
              title={professorInfo.info.name}
              subTitle={professorInfo.info.major}
              isPieceHovered={isThumbnailHovered}
            />
          </>
        </CardOverlayBackground>
      </S.ProfessorCardLink>
    </motion.div>
  );
};

export default ProfessorCard;
