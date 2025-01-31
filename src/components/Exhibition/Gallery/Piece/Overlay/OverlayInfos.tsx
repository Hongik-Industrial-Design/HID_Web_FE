import { JSX } from 'react/jsx-runtime';

import { OverlayInfosProps } from '@components/Exhibition/Gallery.types';

import * as S from './OverlayInfos.styled';

const OverlayInfos = ({
  pieceInfos,
  isPieceHovered,
}: OverlayInfosProps): JSX.Element => {
  return (
    <S.OverlayContainer $isPieceHovered={isPieceHovered}>
      <div className="credit">
        <div className="title">{pieceInfos.title}</div>
        <div className="author">{pieceInfos.author}</div>
      </div>
    </S.OverlayContainer>
  );
};

export default OverlayInfos;
