import { JSX } from 'react/jsx-runtime';
import { useCallback, useState } from 'react';

import { GRADUATION_EXHIBITION_MAJOR_LIST } from '@constants/Exhibition';

import MajorRadioButtonGroup from '@components/Button/MajorRadio/MajorRadioButtonGroup';
import ExhibitionTextInput from '@components/Input/Exhibition/ExhibitionTextInput';
import DescriptionInput from '@components/Input/Description/DescriptionInput';

import * as S from './ExhibitionRegister.styled';
import { BehanceLogo, LinkedinLogo } from '@icons/SocialLogo';

const ExhibitionRegister = (): JSX.Element => {
  const majorList = GRADUATION_EXHIBITION_MAJOR_LIST;

  const [selectedMajor, setSelectedMajor] = useState<string>(majorList[0]);

  const handleMajorClick = useCallback((major: string) => {
    setSelectedMajor(major);
  }, []);

  return (
    <S.ExhibitionRegisterContainer>
      <S.ArtworkInfoTitle>
        Artwork Information<span>.</span>
      </S.ArtworkInfoTitle>
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
    </S.ExhibitionRegisterContainer>
  );
};

export default ExhibitionRegister;
