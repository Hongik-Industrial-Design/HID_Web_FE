import { useState } from 'react';

import * as S from './ExhibitionTextInput.styled';

type ExhibitionTextInputProps = {
  placeholder: string;
};

const ExhibitionTextInput = ({ placeholder }: ExhibitionTextInputProps) => {
  const [text, setText] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <S.ExhibitionTextInput
      type="text"
      value={text}
      onChange={handleInputChange}
      placeholder={placeholder}
    />
  );
};

export default ExhibitionTextInput;
