import { ExhibitionDetailInfo } from '@pages/Exhibition/Register/ExhibitionRegister.types';

import * as S from './ExhibitionTextInput.styled';

type ExhibitionTextInputProps = {
  value: string;
  field: keyof ExhibitionDetailInfo;
  handleTextChange: (field: keyof ExhibitionDetailInfo, value: string) => void;
  placeholder: string;
};

const ExhibitionTextInput = ({
  value,
  field,
  handleTextChange,
  placeholder,
}: ExhibitionTextInputProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleTextChange(field, e.target.value);
  };

  return (
    <S.ExhibitionTextInput
      type="text"
      value={value}
      onChange={handleInputChange}
      placeholder={placeholder}
    />
  );
};

export default ExhibitionTextInput;
