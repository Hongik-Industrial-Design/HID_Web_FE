import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';
import { Location, useLocation } from 'react-router';

import { PieceProps } from '@components/Exhibition/Exhibition.types';

import OverlayInfos from './Overlay/OverlayInfos';

import * as S from './StudentPiece.styled';

const StudentPiece = ({
  exhibitId,
  title,
  subTitle,
  imageURL,
}: PieceProps): JSX.Element => {
  const [isPieceHovered, setIsPieceHovered] = useState<boolean>(false);

  const handleMouseEnter = () => setIsPieceHovered(true);
  const handleMouseLeave = () => setIsPieceHovered(false);

  const location: Location = useLocation();

  const exhibitionType = location.pathname.includes('graduation')
    ? 'graduation'
    : 'student';

  return (
    <S.PieceContainer
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <S.PieceLink
        to={`/${exhibitionType}/${exhibitId}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <S.PieceImage src={imageURL} alt={title} />
        <OverlayInfos
          title={title}
          subTitle={subTitle}
          isPieceHovered={isPieceHovered}
        />
      </S.PieceLink>
    </S.PieceContainer>
  );
};

export default StudentPiece;
