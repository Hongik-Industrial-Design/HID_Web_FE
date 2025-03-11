import { JSX } from 'react/jsx-runtime';

import { DetailInfoFormData } from '@schemas/registerSchema';

import * as S from './MajorRadioButtonGroup.styled';

type MajorRadioButtonProps = {
  radioListType: keyof DetailInfoFormData;
  majorList: string[];
  selectedMajor: string | null;
  handleMajorClick: (field: keyof DetailInfoFormData, major: string) => void;
};

const MajorRadioButtonGroup = ({
  radioListType,
  majorList,
  selectedMajor,
  handleMajorClick,
}: MajorRadioButtonProps): JSX.Element => {
  return (
    <S.MajorRadioButtonList>
      {majorList.map((major) => (
        <S.MajorRadioButtonItem key={major}>
          <S.MajorRadioButtonLabel htmlFor={major}>
            <S.MajorRadioInput
              type="radio"
              id={major}
              name={major}
              onClick={() => handleMajorClick(radioListType, major)}
              $isSelected={selectedMajor === major}
            />
            <S.MajorRadioButtonName>{major}</S.MajorRadioButtonName>
          </S.MajorRadioButtonLabel>
        </S.MajorRadioButtonItem>
      ))}
    </S.MajorRadioButtonList>
  );
};

export default MajorRadioButtonGroup;
