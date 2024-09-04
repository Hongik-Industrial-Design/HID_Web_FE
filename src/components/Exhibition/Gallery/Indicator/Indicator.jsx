import { IndicatorBar, IndicatorContainer } from "./Indicator.styled";

// eslint-disable-next-line react/prop-types
const Indicator = ({ handleScroll, width }) => {
  return (
    <IndicatorContainer>
      <IndicatorBar onScroll={handleScroll} style={{ width: `${width}` }} />
    </IndicatorContainer>
  );
};

export default Indicator;
