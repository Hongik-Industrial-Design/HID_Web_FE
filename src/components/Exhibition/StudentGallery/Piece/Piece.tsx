import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';

import { PieceProps } from '@components/Exhibition/Exhibition.types';

import PieceOverlay from './Overlay/PieceOverlay';

import * as S from './Piece.styled';

const Piece = ({
  exhibitId,
  title,
  subTitle,
  imageURL,
}: PieceProps): JSX.Element => {
  const [isPieceHovered, setIsPieceHovered] = useState<boolean>(false);

  const handleMouseEnter = () => setIsPieceHovered(true);
  const handleMouseLeave = () => setIsPieceHovered(false);

  return (
    <S.PieceContainer
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.3,
        scale: { type: 'spring', visualDuration: 0.3, bounce: 0.5 },
      }}
    >
      <S.PieceLink
        to={`${exhibitId}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <S.PieceOverlayContainer>
          <S.OverlayBackgroundTop $isThumbnailHovered={isPieceHovered} />

          <S.PieceImage src={imageURL} alt={title} />
          <PieceOverlay
            title={title}
            subTitle={subTitle}
            isPieceHovered={isPieceHovered}
          />

          <S.OverlayBackgroundBottom $isThumbnailHovered={isPieceHovered} />
        </S.PieceOverlayContainer>
      </S.PieceLink>
    </S.PieceContainer>
  );
};

export default Piece;
