import { JSX } from 'react/jsx-runtime';
import { useCallback, useState } from 'react';

import { ArtistInfo } from './Artist.types';

import { GRADUATION_EXHIBITION_MAJOR_LIST } from '@constants/Exhibition';

import { BehanceLogo, LinkedinLogo } from '@icons/SocialLogo';
import MajorRadioButtonGroup from '@components/Button/MajorRadio/MajorRadioButtonGroup';
import ExhibitionTextInput from '@components/Input/Exhibition/ExhibitionTextInput';
import DescriptionInput from '@components/Input/Description/DescriptionInput';
import YoutubeCircleLogo from '@components/YoutubeCircleLogo/YoutubeCircleLogo';
import ImagePreview from '@components/AddImageBox/Preview/ImagePreview';
import AddElementBox from '@components/AddImageBox/AddImageBox';
import ArtistInfoCard from '@components/ArtistInfoCard/ArtistInfoCard';
import AddParticipantBox from '@components/AddParticipantBox/AddParticipantBox';

import * as S from './ExhibitionRegister.styled';
import SaveCancelButton from '@components/Button/SaveCancel/SaveCancelButton';

const ExhibitionRegister = (): JSX.Element => {
  const majorList = GRADUATION_EXHIBITION_MAJOR_LIST;

  const [selectedMajor, setSelectedMajor] = useState<string>(majorList[0]);

  const handleMajorClick = useCallback((major: string) => {
    setSelectedMajor(major);
  }, []);

  // 전시 이미지 추가 관련
  const [images, setImages] = useState<string[]>([]);

  const handleImageUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;

      console.log('Files: ', files);

      if (files) {
        // 여러개의 이미지를 한번에 추가할 수 있도록 설정
        const newImages = Array.from(files).map((file) =>
          URL.createObjectURL(file)
        );

        setImages((prevImages) => [...prevImages, ...newImages]);
      }
    },
    []
  );

  const handleImageDelete = useCallback((imageUrl: string) => {
    setImages((prevImages) => prevImages.filter((image) => image !== imageUrl));
  }, []);

  // 참여 작가 정보 관련
  const [artists, setArtists] = useState<ArtistInfo[]>([]);

  // Artist Card 추가
  const addArtistCard = useCallback(() => {
    setArtists([
      ...artists,
      {
        id: artists.length + 1,
        profileImage: '',
        name: '',
        major: '',
        email: '',
      },
    ]);
  }, [artists]);

  const handleArtistProfileChange = (
    id: number,
    field: keyof ArtistInfo,
    value: string
  ) => {
    setArtists((prevArtists) =>
      prevArtists.map((artist) =>
        artist.id === id ? { ...artist, [field]: value } : artist
      )
    );
  };

  const handleArtistProfileImageUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
      const file = e.target.files?.[0];

      if (file) {
        const newImage = URL.createObjectURL(file);

        setArtists((prevArtists) =>
          prevArtists.map((artist) =>
            artist.id === id ? { ...artist, profileImage: newImage } : artist
          )
        );
      }
    },
    []
  );

  return (
    <S.ExhibitionRegisterContainer>
      <S.ArtworkInfoTitle>
        Artwork Information<span>.</span>
      </S.ArtworkInfoTitle>

      {/* Major, Title, SubTitle, Description */}
      <S.DetailInfoSection>
        <S.DetailInfoTitle>
          Detail Infos<span>.</span>
        </S.DetailInfoTitle>

        <S.DetailInfoContainer>
          <S.MajorTitleSection>
            {/* Major */}
            <S.DetailInfoUnit>
              <S.DetailInfoInputLabel>Major</S.DetailInfoInputLabel>
              <MajorRadioButtonGroup
                majorList={majorList}
                selectedMajor={selectedMajor}
                handleMajorClick={handleMajorClick}
              />
            </S.DetailInfoUnit>

            {/* Title */}
            <S.DetailInfoUnit>
              <S.DetailInfoInputLabel>Title</S.DetailInfoInputLabel>
              <ExhibitionTextInput placeholder="Enter Artwork Title." />
            </S.DetailInfoUnit>

            {/* SubTitle */}
            <S.DetailInfoUnit>
              <S.DetailInfoInputLabel>Subtitle</S.DetailInfoInputLabel>
              <ExhibitionTextInput placeholder="Enter Artwork Subtitle." />
            </S.DetailInfoUnit>
          </S.MajorTitleSection>

          {/* Description */}
          <S.DescriptionSection>
            <S.DescriptionLabel>Description (ENG/KOR)</S.DescriptionLabel>
            <S.DescriptionUnit>
              <S.LanguageDescriptionContainer>
                <S.LanguageDescriptionLabel>ENG</S.LanguageDescriptionLabel>
                <S.DescriptionDivider />
              </S.LanguageDescriptionContainer>
              <DescriptionInput language="English" />
            </S.DescriptionUnit>
            <S.DescriptionUnit>
              <S.LanguageDescriptionContainer>
                <S.LanguageDescriptionLabel>KOR</S.LanguageDescriptionLabel>
                <S.DescriptionDivider />
              </S.LanguageDescriptionContainer>
              <DescriptionInput language="Korean" />
            </S.DescriptionUnit>
          </S.DescriptionSection>

          {/* SNS Link */}
          <S.SocialLinkSection>
            <S.DetailInfoInputLabel>SNS Link</S.DetailInfoInputLabel>
            <S.SocialLinkContainer>
              {/* Behance */}
              <S.SocialLinkForm>
                <BehanceLogo />
                <ExhibitionTextInput placeholder="Enter Behance Link." />
              </S.SocialLinkForm>
              {/* Linkedin */}
              <S.SocialLinkForm>
                <LinkedinLogo />
                <ExhibitionTextInput placeholder="Enter Linkedin Link." />
              </S.SocialLinkForm>
            </S.SocialLinkContainer>
          </S.SocialLinkSection>
        </S.DetailInfoContainer>
      </S.DetailInfoSection>

      {/* Videos */}
      <S.ExhibitionVideoSection>
        <S.DetailInfoTitle>
          Video<span>.</span>
        </S.DetailInfoTitle>
        <S.VideoLinkContainer>
          <YoutubeCircleLogo />
          <ExhibitionTextInput placeholder="Enter Youtube Link." />
        </S.VideoLinkContainer>
      </S.ExhibitionVideoSection>

      {/* Image */}
      <S.ExhibitonImageSection>
        <S.DetailInfoTitle>
          Images<span>.</span>
        </S.DetailInfoTitle>
        <S.ImagePreviewScrollContainer>
          <S.ImagePreviewContainer>
            {images.map((image) => (
              <ImagePreview
                key={image}
                image={image}
                handleImageDelete={() => handleImageDelete(image)}
              />
            ))}
            <AddElementBox handleImageUpload={handleImageUpload} />
          </S.ImagePreviewContainer>
        </S.ImagePreviewScrollContainer>
      </S.ExhibitonImageSection>

      {/* Participants */}
      <S.ParticipantSection>
        <S.DetailInfoTitle>
          Participants<span>.</span>
        </S.DetailInfoTitle>
        <S.ParticipantList>
          {artists.map((artist) => (
            <ArtistInfoCard
              key={artist.id}
              artistInfo={artist}
              handleArtistProfileChange={handleArtistProfileChange}
              handleProfileImageUpload={handleArtistProfileImageUpload}
            />
          ))}
          <AddParticipantBox addArtistCard={addArtistCard} />
        </S.ParticipantList>
      </S.ParticipantSection>

      {/* Save & Cancel Button */}
      <S.SaveCancelButtonSection>
        <SaveCancelButton buttonType="save" />
        <SaveCancelButton buttonType="cancel" />
      </S.SaveCancelButtonSection>
    </S.ExhibitionRegisterContainer>
  );
};

export default ExhibitionRegister;
