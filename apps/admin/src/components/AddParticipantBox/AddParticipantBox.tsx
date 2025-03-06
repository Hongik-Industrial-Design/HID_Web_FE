import { JSX } from 'react/jsx-runtime';

import { PlusIconNavy } from '@icons/Plus';

import * as S from './AddParticipantBox.styled';

const AddParticipantBox = (): JSX.Element => {
  return (
    <S.AddParticipantBoxContainer>
      <S.AddParticipantContent>
        <S.PlusIconContainer>
          <PlusIconNavy />
        </S.PlusIconContainer>
        <S.AddParticipantBoxTitle>Add Participants!</S.AddParticipantBoxTitle>
      </S.AddParticipantContent>
    </S.AddParticipantBoxContainer>
  );
};

export default AddParticipantBox;
