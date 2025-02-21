import { JSX } from 'react/jsx-runtime';

import { OverlayProps } from '@components/Exhibition/Exhibition.types';

import * as S from './CardOverlayText.styled';

const CardOverlayText = ({
  title,
  subTitle,
  isPieceHovered,
}: OverlayProps): JSX.Element => {
  return (
    <S.CardOverlayTextContainer $isThumbnailHovered={isPieceHovered}>
      <S.OverlayTitle>{title}</S.OverlayTitle>
      <S.OverlaySubTitle>{subTitle}</S.OverlaySubTitle>
    </S.CardOverlayTextContainer>
  );
};

export default CardOverlayText;
