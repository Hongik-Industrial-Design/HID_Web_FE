import { JSX } from 'react/jsx-runtime';

import { PlusIconNavy } from '@icons/Plus';

import * as S from './AddImageBox.styled';

type AddImageBoxProps = {
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const AddImageBox = ({ handleImageUpload }: AddImageBoxProps): JSX.Element => {
  return (
    <S.AddElementBoxContainer>
      <S.HiddenFileInput
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageUpload}
      />
      <S.AddElementBox>
        <S.AddElementIconBox>
          <PlusIconNavy />
        </S.AddElementIconBox>
        <S.AddElementText>Add Artwork Images!</S.AddElementText>
      </S.AddElementBox>
    </S.AddElementBoxContainer>
  );
};

export default AddImageBox;
