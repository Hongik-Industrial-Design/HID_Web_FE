import { JSX } from 'react/jsx-runtime';
import { useCallback, useState } from 'react';

import { GRADUATION_EXHIBITION_MAJOR_LIST } from '@constants/Exhibition';

import MajorRadioButtonGroup from '@components/Button/MajorRadio/MajorRadioButtonGroup';

import * as S from './ExhibitionRegister.styled';

const ExhibitionRegister = (): JSX.Element => {
  const majorList = GRADUATION_EXHIBITION_MAJOR_LIST;

  const [selectedMajor, setSelectedMajor] = useState<string>(majorList[0]);

  const handleMajorClick = useCallback((major: string) => {
    setSelectedMajor(major);
  }, []);

  return (
    <S.ExhibitionRegisterContainer>
      <S.ArtworkInfoTitle>
        Artwork Information <span>.</span>
      </S.ArtworkInfoTitle>
      <S.DetailInfoSection>
        <S.DetailInfoTitle>
          Detail Infos <span>.</span>
        </S.DetailInfoTitle>
        <MajorRadioButtonGroup
          majorList={majorList}
          selectedMajor={selectedMajor}
          handleMajorClick={handleMajorClick}
        />
      </S.DetailInfoSection>
    </S.ExhibitionRegisterContainer>
  );
};

export default ExhibitionRegister;
