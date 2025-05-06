import { JSX } from 'react/jsx-runtime';
import { useLocation } from 'react-router';

import { OverlayProps } from '@components/Gallery/Exhibition.types';

import * as S from './CardOverlayText.styled';

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
