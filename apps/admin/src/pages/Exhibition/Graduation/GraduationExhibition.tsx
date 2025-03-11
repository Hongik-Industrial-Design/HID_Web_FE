import { JSX } from 'react/jsx-runtime';

import ExhibitionHeader from '@components/ExhibitionHeader/ExhibitionHeader';

import * as S from './GraduationExhibition.styled';

const GraduationExhibition = (): JSX.Element => {
  return (
    <S.GraduationExhibitionContainer>
      <ExhibitionHeader exhibitionType="GRADUATION" />
    </S.GraduationExhibitionContainer>
  );
};

export default GraduationExhibition;
