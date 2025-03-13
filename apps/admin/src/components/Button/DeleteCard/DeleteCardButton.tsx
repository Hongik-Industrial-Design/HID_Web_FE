import { JSX } from 'react/jsx-runtime';

import { DeleteIcon } from '@icons/Delete';

import * as S from './DeleteCardButton.styled';

type DeleteCardButtonProps = {
  handleImageDelete: () => void;
};

const DeleteCardButton = ({
  handleImageDelete,
}: DeleteCardButtonProps): JSX.Element => {
  return (
    <S.DeleteCardButtonContainer type="button" onClick={handleImageDelete}>
      <DeleteIcon />
    </S.DeleteCardButtonContainer>
  );
};

export default DeleteCardButton;
