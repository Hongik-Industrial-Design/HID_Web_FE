import { JSX } from 'react/jsx-runtime';

import ExhibitionHeader from '@components/ExhibitionHeader/ExhibitionHeader';

import * as S from './StudentExhibition.styled';

const StudentExhibition = (): JSX.Element => {
  return (
    <S.StudentExhibitionContainer>
      <ExhibitionHeader exhibitionType="CLUB" />
    </S.StudentExhibitionContainer>
  );
};

export default StudentExhibition;
