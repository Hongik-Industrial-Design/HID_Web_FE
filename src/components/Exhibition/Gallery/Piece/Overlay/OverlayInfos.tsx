import { JSX } from 'react/jsx-runtime';

import { OverlayInfosProps } from '@components/Exhibition/Gallery.types';

import * as S from './OverlayInfos.styled';

const OverlayInfos = ({
  pieceInfos,
  isPieceHovered,
}: OverlayInfosProps): JSX.Element => {
  return (
    <S.OverlayInfosContainer $isPieceHovered={isPieceHovered}>
      <S.PieceInfos>
        <S.PieceTitle>{pieceInfos.title}</S.PieceTitle>
        <S.PieceSubTitle>{pieceInfos.author}</S.PieceSubTitle>
      </S.PieceInfos>
    </S.OverlayInfosContainer>
  );
};

export default OverlayInfos;
