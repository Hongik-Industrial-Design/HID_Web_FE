import { JSX } from 'react/jsx-runtime';

import * as S from './MajorRadioButtonGroup.styled';

type MajorRadioButtonProps = {
  majorList: string[];
  selectedMajor: string;
  handleMajorClick: (major: string) => void;
};

const MajorRadioButtonGroup = ({
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
              onClick={() => handleMajorClick(major)}
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
