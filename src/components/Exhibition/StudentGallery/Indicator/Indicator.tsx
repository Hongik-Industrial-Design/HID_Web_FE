import { JSX } from 'react/jsx-runtime';

import { IndicatorProps } from '@components/Exhibition/Exhibition.types';

import * as S from './Indicator.styled';

const Indicator = ({ handleScroll, width }: IndicatorProps): JSX.Element => {
  return (
    <S.IndicatorContainer>
      <S.IndicatorBar onScroll={handleScroll} style={{ width: `${width}` }} />
    </S.IndicatorContainer>
  );
};

export default Indicator;
