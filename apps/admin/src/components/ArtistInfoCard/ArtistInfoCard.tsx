import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';

import { ArtistInfoField } from '@schemas/registerSchema';

import { PlusIconGray } from '@icons/Plus';
import { ImageEditIcon } from '@icons/ImageEdit';
import DeleteCardButton from '@components/Button/Delete/Card/DeleteCardButton';

import * as S from './ArtistInfoCard.styled';

type ArtistInfoCardProps = {
  artistInfo: ArtistInfoField;
  handleArtistProfileChange: (
    id: number,
    field: keyof ArtistInfoField,
    value: string
  ) => void;
  handleProfileImageUpload: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => void;
  handleArtistCardDelete: (artistId: number) => void;
};

const ArtistInfoCard = ({
  artistInfo,
  handleArtistProfileChange,
  handleProfileImageUpload,
  handleArtistCardDelete,
}: ArtistInfoCardProps): JSX.Element => {
  const [isProfileImageHovered, setIsProfileImageHovered] =
    useState<boolean>(false);

  const handleProfileImageHover = () => setIsProfileImageHovered(true);
  const handleProfileImageLeave = () => setIsProfileImageHovered(false);

  return (
    <S.ArtistInfoCardContainer>
      <S.ArtistCountContainer>
        <S.ArtistImageContainer
          onMouseEnter={handleProfileImageHover}
          onMouseLeave={handleProfileImageLeave}
        >
          <S.ProfileSelectFileInput
            type="file"
            accept="image/*"
            onChange={(e) => handleProfileImageUpload(e, artistInfo.id)}
          />
          {artistInfo.profileImgFile.size > 0 ? (
            <>
              <S.ArtistProfileImage
                src={URL.createObjectURL(artistInfo.profileImgFile)}
              />
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
        <S.ArtistCountDeleteContainer>
          <DeleteCardButton
            handleCardDelete={() => handleArtistCardDelete(artistInfo.id)}
          />
          <S.ArtistCountText>Artist No.{`${artistInfo.id}`}</S.ArtistCountText>
        </S.ArtistCountDeleteContainer>
      </S.ArtistCountContainer>
      <S.ArtistTextInfoContainer>
        <S.ArtistNameInput
          type="text"
          placeholder="Artist Name (ENG)"
          value={artistInfo.nameEn}
          onChange={(e) =>
            handleArtistProfileChange(artistInfo.id, 'nameEn', e.target.value)
          }
          required
        />
        <S.ArtistKoreanNameInput
          type="text"
          placeholder="작가 이름 (한글)"
          value={artistInfo.nameKo}
          onChange={(e) =>
            handleArtistProfileChange(artistInfo.id, 'nameKo', e.target.value)
          }
          required
        />
        <S.ArtistMajorInput
          type="text"
          placeholder="Artist Role"
          value={artistInfo.role}
          onChange={(e) =>
            handleArtistProfileChange(artistInfo.id, 'role', e.target.value)
          }
          required
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
