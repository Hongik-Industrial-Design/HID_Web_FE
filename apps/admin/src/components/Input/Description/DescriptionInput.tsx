import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';

import { DetailInfoFormData } from '@schemas/registerSchema';

import * as S from './DescriptionInput.styled';

type DescriptionInputProps = {
  language: 'Korean' | 'English';
  value: string;
  field: keyof DetailInfoFormData;
  handleTextChange: (field: keyof DetailInfoFormData, value: string) => void;
  inputRef: React.RefObject<HTMLTextAreaElement | null>;
  maxLength: number;
};

const DescriptionInput = ({
  language,
  value,
  field,
  handleTextChange,
  inputRef,
  maxLength,
}: DescriptionInputProps): JSX.Element => {
  const [textCount, setTextCount] = useState<number>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleTextChange(field, e.target.value);

    if (inputRef && inputRef.current) {
      setTextCount(inputRef.current.value.length);
    }
  };

  return (
    <S.DescriptionInputContainer>
      <S.DescriptionTextarea
        ref={inputRef}
        value={value}
        onChange={handleInputChange}
        placeholder={
          language === 'Korean'
            ? '작품에 대한 설명을 입력해주세요.'
            : 'Enter the description of the artwork.'
        }
        $isKorean={language === 'Korean'}
        maxLength={maxLength}
        required
      />
      <S.DescriptionTextCount $isLimited={textCount === maxLength}>
        {textCount === maxLength && (
          <S.DescriptionCountWarning>
            제한 글자수에 도달했습니다.
          </S.DescriptionCountWarning>
        )}
        {textCount}/{maxLength}자 (공백 포함)
      </S.DescriptionTextCount>
    </S.DescriptionInputContainer>
  );
};

export default DescriptionInput;
