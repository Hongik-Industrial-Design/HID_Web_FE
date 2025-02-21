import { JSX } from 'react/jsx-runtime';

import * as S from './CardOverlayBackground.styled';

type CardOverlayBackgroundProps = {
  children: JSX.Element;
  isThumbnailHovered: boolean;
};

export const CardOverlayBackground = ({
  children,
  isThumbnailHovered,
}: CardOverlayBackgroundProps): JSX.Element => {
  return (
    <S.OverlayBackgroundContainer>
      <S.OverlayBackgroundTop $isThumbnailHovered={isThumbnailHovered} />
      {children}
      <S.OverlayBackgroundBottom $isThumbnailHovered={isThumbnailHovered} />
    </S.OverlayBackgroundContainer>
  );
};

export default CardOverlayBackground;
