import { IndicatorBar, IndicatorContainer } from './Indicator.styled';

const Indicator = ({ handleScroll, width }) => {
  return (
    <IndicatorContainer>
      <IndicatorBar onScroll={handleScroll} style={{ width: `${width}` }} />
    </IndicatorContainer>
  );
};

export default Indicator;
