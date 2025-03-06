import { JSX } from 'react/jsx-runtime';

import { PlusIconGray } from '@icons/Plus';

import * as S from './ArtistInfoCard.styled';

const ArtistInfoCard = (): JSX.Element => {
  return (
    <S.ArtistInfoCardContainer>
      <S.ArtistImageContainer>
        <S.ProfileSelectFileInput type="file" accept="image/*" />
        <S.PlusIconContainer>
          <PlusIconGray />
        </S.PlusIconContainer>
        <S.AddProfileImageText>Add Profile Image!</S.AddProfileImageText>
      </S.ArtistImageContainer>
      <S.ArtistTextInfoContainer>
        <S.ArtistNameInput type="text" placeholder="Artist Name" />
        <S.ArtistMajorInput type="text" placeholder="Major" />
        <S.ArtistEmailInput type="text" placeholder="Contact e-mail" />
      </S.ArtistTextInfoContainer>
    </S.ArtistInfoCardContainer>
  );
};

export default ArtistInfoCard;
