import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';

import { PlusIconGray } from '@icons/Plus';

import * as S from './ArtistInfoCard.styled';
import { ImageEditIcon } from '@icons/ImageEdit';

type ArtistInfoCardProps = {
  profileImage: string;
  handleProfileImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ArtistInfoCard = ({
  profileImage,
  handleProfileImageUpload,
}: ArtistInfoCardProps): JSX.Element => {
  const [isProfileImageHovered, setIsProfileImageHovered] =
    useState<boolean>(false);

  const handleProfileImageHover = () => setIsProfileImageHovered(true);
  const handleProfileImageLeave = () => setIsProfileImageHovered(false);

  return (
    <S.ArtistInfoCardContainer>
      <S.ArtistImageContainer
        onMouseEnter={handleProfileImageHover}
        onMouseLeave={handleProfileImageLeave}
      >
        <S.ProfileSelectFileInput
          type="file"
          accept="image/*"
          onChange={handleProfileImageUpload}
        />
        {profileImage ? (
          <>
            <S.ArtistProfileImage src={profileImage} />
            {/* Hover시 이미지 변경 UI */}
            <S.ProfileImageOverlay
              $isProfileImageHovered={isProfileImageHovered}
            >
              <ImageEditIcon />
            </S.ProfileImageOverlay>
          </>
        ) : (
          <>
            <S.PlusIconContainer>
              <PlusIconGray />
            </S.PlusIconContainer>
            <S.AddProfileImageText>Add Profile Image!</S.AddProfileImageText>
          </>
        )}
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
