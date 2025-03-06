import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';

import { ArtistInfo } from '@pages/Exhibition/Register/Artist.types';

import { PlusIconGray } from '@icons/Plus';
import { ImageEditIcon } from '@icons/ImageEdit';

import * as S from './ArtistInfoCard.styled';

type ArtistInfoCardProps = {
  artistInfo: ArtistInfo;
  handleArtistProfileChange: (
    id: number,
    field: keyof ArtistInfo,
    value: string
  ) => void;
  handleProfileImageUpload: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => void;
};

const ArtistInfoCard = ({
  artistInfo,
  handleArtistProfileChange,
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
          onChange={(e) => handleProfileImageUpload(e, artistInfo.id)}
        />
        {artistInfo.profileImage ? (
          <>
            <S.ArtistProfileImage src={artistInfo.profileImage} />
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
        <S.ArtistNameInput
          type="text"
          placeholder="Artist Name"
          value={artistInfo.name}
          onChange={(e) =>
            handleArtistProfileChange(artistInfo.id, 'name', e.target.value)
          }
        />
        <S.ArtistMajorInput
          type="text"
          placeholder="Major"
          value={artistInfo.major}
          onChange={(e) =>
            handleArtistProfileChange(artistInfo.id, 'major', e.target.value)
          }
        />
        <S.ArtistEmailInput
          type="text"
          placeholder="Contact e-mail"
          value={artistInfo.email}
          onChange={(e) =>
            handleArtistProfileChange(artistInfo.id, 'email', e.target.value)
          }
        />
      </S.ArtistTextInfoContainer>
    </S.ArtistInfoCardContainer>
  );
};

export default ArtistInfoCard;
