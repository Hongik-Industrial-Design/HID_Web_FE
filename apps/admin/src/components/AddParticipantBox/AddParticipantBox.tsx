import { JSX } from 'react/jsx-runtime';

import { PlusIconNavy } from '@icons/Plus';

import * as S from './AddParticipantBox.styled';

type AddParticipantBoxProps = {
  addArtistCard: () => void;
};

const AddParticipantBox = ({
  addArtistCard,
}: AddParticipantBoxProps): JSX.Element => {
  return (
    <S.AddParticipantBoxContainer onClick={addArtistCard}>
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
