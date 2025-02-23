import { JSX } from 'react/jsx-runtime';

import * as S from './ScrollButton.styled';

type ScrollButtonProps = {
  arrowType: 'left' | 'right';
  onClick: () => void;
  isScrolled: boolean;
};

const ScrollButton = ({
  arrowType,
  onClick,
  isScrolled,
}: ScrollButtonProps): JSX.Element => {
  return (
    <S.ScrollContainer
      onClick={onClick}
      $arrowType={arrowType}
      $isScrolled={isScrolled}
    >
      <S.Arrow
        src={`src/assets/arrows/${arrowType}-arrow.svg`}
        alt={`${arrowType}-arrow`}
      />
    </S.ScrollContainer>
  );
};

export default ScrollButton;
