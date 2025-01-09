import * as S from './Indicator.styled';

const Indicator = ({ handleScroll, width }) => {
  return (
    <S.IndicatorContainer>
      <S.IndicatorBar onScroll={handleScroll} style={{ width: `${width}` }} />
    </S.IndicatorContainer>
  );
};

export default Indicator;
