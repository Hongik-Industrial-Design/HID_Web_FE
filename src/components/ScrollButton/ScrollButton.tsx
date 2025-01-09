import * as S from './ScrollButton.styled';

const ScrollButton = ({ arrowType, onClick, isScrolled }) => {
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
