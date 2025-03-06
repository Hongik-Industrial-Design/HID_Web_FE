import { JSX } from 'react/jsx-runtime';
import { useState } from 'react';

import * as S from './DescriptionInput.styled';

type DescriptionInputProps = {
  language: 'Korean' | 'English';
};

const DescriptionInput = ({ language }: DescriptionInputProps): JSX.Element => {
  const [text, setText] = useState<string>('');

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <S.DescriptionTextarea
      value={text}
      onChange={handleTextChange}
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
