import { JSX } from 'react/jsx-runtime';

import * as S from './CardOverlayBackground.styled';

type CardOverlayBackgroundProps = {
  children: JSX.Element;
  bgDirection: 'horizontal' | 'vertical';
  isThumbnailHovered: boolean;
};

export const CardOverlayBackground = ({
  children,
  bgDirection,
  isThumbnailHovered,
}: CardOverlayBackgroundProps): JSX.Element => {
  return (
    <S.OverlayBackgroundContainer>
      <S.OverlayBackgroundTopOrLeft
        $isVertical={bgDirection === 'vertical'}
        $isThumbnailHovered={isThumbnailHovered}
      />
      {children}
      <S.OverlayBackgroundBottomOrRight
        $isVertical={bgDirection === 'vertical'}
        $isThumbnailHovered={isThumbnailHovered}
      />
    </S.OverlayBackgroundContainer>
  );
};

export default CardOverlayBackground;
