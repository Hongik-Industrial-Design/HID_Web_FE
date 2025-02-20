import { JSX } from 'react/jsx-runtime';

import { OverlayProps } from '@components/Exhibition/Exhibition.types';

import * as S from './OverlayInfos.styled';

const OverlayInfos = ({
  title,
  subTitle,
  isPieceHovered,
}: OverlayProps): JSX.Element => {
  return (
    <S.OverlayInfosContainer $isThumbnailHovered={isPieceHovered}>
      <S.PieceTitle>{title}</S.PieceTitle>
      <S.PieceSubTitle>{subTitle}</S.PieceSubTitle>
    </S.OverlayInfosContainer>
  );
};

export default OverlayInfos;
