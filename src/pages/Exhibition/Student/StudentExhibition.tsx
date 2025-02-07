import { JSX } from 'react/jsx-runtime';

import Exhibition from '@components/Exhibition/Exhibition';

import * as S from './StudentExhibition.styled';

const StudentExhibiton = (): JSX.Element => {
  return (
    <S.StudentExhibitionContainer>
      <Exhibition />
    </S.StudentExhibitionContainer>
  );
};

export default StudentExhibiton;
