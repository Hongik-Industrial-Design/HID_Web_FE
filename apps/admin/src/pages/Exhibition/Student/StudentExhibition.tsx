import { JSX } from 'react/jsx-runtime';

import * as S from './StudentExhibition.styled';
import ExhibitionHeader from '@components/ExhibitionHeader/ExhibitionHeader';

const StudentExhibition = (): JSX.Element => {
  return (
    <S.StudentExhibitionContainer>
      <ExhibitionHeader exhibitionType="CLUB" />
    </S.StudentExhibitionContainer>
  );
};

export default StudentExhibition;
