import { JSX } from 'react/jsx-runtime';

import { ExhibitionDetailInfo } from '@pages/Exhibition/Register/ExhibitionRegister.types';

import * as S from './DescriptionInput.styled';

type DescriptionInputProps = {
  language: 'Korean' | 'English';
  value: string;
  field: keyof ExhibitionDetailInfo;
  handleTextChange: (field: keyof ExhibitionDetailInfo, value: string) => void;
};

const DescriptionInput = ({
  language,
  value,
  field,
  handleTextChange,
}: DescriptionInputProps): JSX.Element => {
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleTextChange(field, e.target.value);
  };

  return (
    <S.DescriptionTextarea
      value={value}
      onChange={handleInputChange}
      placeholder={
        language === 'Korean'
          ? '작품에 대한 설명을 입력해주세요.'
          : 'Enter the description of the artwork.'
      }
      $isKorean={language === 'Korean'}
    />
  );
};

export default DescriptionInput;
