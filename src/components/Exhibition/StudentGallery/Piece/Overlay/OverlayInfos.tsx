import { JSX } from 'react/jsx-runtime';

import { OverlayProps } from '@components/Exhibition/Exhibition.types';

import * as S from './OverlayInfos.styled';

const OverlayInfos = ({
  title,
  subTitle,
  isPieceHovered,
}: OverlayProps): JSX.Element => {
  return (
    <S.OverlayInfosContainer $isPieceHovered={isPieceHovered}>
      <S.PieceInfos>
        <S.PieceTitle>{title}</S.PieceTitle>
        <S.PieceSubTitle>{subTitle}</S.PieceSubTitle>
      </S.PieceInfos>
    </S.OverlayInfosContainer>
  );
};

export default OverlayInfos;
