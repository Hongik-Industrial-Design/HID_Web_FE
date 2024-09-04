import { Arrow, ScrollContainer } from "./ScrollButton.styled";

// eslint-disable-next-line react/prop-types
const ScrollButton = ({ arrowType, onClick, isScrolled }) => {
  return (
    <ScrollContainer
      onClick={onClick}
      $arrowType={arrowType}
      $isScrolled={isScrolled}
    >
      <Arrow
        src={`src/assets/arrows/${arrowType}-arrow.svg`}
        alt={`${arrowType}-arrow`}
      />
    </ScrollContainer>
  );
};

export default ScrollButton;
