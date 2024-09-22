/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ProfessorContainer,
  ProfessorOverlay,
  ProfessorThumbnail,
} from "./ProfessorCard.styled";

const ProfessorCard = ({ professorInfo }) => {
  const [thumbnailHovered, setThumbnailHovered] = useState(false);

  const navigate = useNavigate();

  const goToProfessorProfile = (id) => {
    navigate(`/faculty/${id}`);
  };

  return (
    <ProfessorContainer
      onClick={() => goToProfessorProfile(professorInfo.id)}
      onMouseEnter={() => setThumbnailHovered(true)}
      onMouseLeave={() => setThumbnailHovered(false)}
    >
      <ProfessorThumbnail
        src={`/Faculty/${professorInfo.thumbnail}`}
        alt={professorInfo.info.name}
      />
      <ProfessorOverlay $isHovered={thumbnailHovered}>
        <h2 className="name">{professorInfo.info.name}</h2>
        <h3 className="major">{professorInfo.info.major}</h3>
      </ProfessorOverlay>
    </ProfessorContainer>
  );
};

export default ProfessorCard;
