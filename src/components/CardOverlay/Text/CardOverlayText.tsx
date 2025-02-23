import { JSX } from 'react/jsx-runtime';

import { OverlayProps } from '@components/Exhibition/Exhibition.types';

import * as S from './CardOverlayText.styled';
import { useLocation } from 'react-router';

const CardOverlayText = ({
  title,
  subTitle,
  isPieceHovered,
}: OverlayProps): JSX.Element => {
  const location = useLocation();
  const isFacultyPage = location.pathname.includes('/faculty');

  return (
    <S.CardOverlayTextContainer
      $isFacultyPage={isFacultyPage}
      $isThumbnailHovered={isPieceHovered}
    >
      <S.OverlayTitle>{title}</S.OverlayTitle>
      <S.OverlaySubTitle>{subTitle}</S.OverlaySubTitle>
    </S.CardOverlayTextContainer>
  );
};

export default CardOverlayText;
