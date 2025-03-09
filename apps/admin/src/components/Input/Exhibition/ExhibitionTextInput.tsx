import { DetailInfoFormData } from '@schemas/registerSchema';

import * as S from './ExhibitionTextInput.styled';

type ExhibitionTextInputProps = {
  value: string | undefined;
  field: keyof DetailInfoFormData;
  handleTextChange: (field: keyof DetailInfoFormData, value: string) => void;
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
