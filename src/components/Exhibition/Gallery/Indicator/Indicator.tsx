import { JSX } from 'react/jsx-runtime';

import * as S from './Indicator.styled';

const Indicator = ({ handleScroll, width }): JSX.Element => {
  return (
    <S.IndicatorContainer>
      <S.IndicatorBar onScroll={handleScroll} style={{ width: `${width}` }} />
    </S.IndicatorContainer>
  );
};

export default Indicator;
