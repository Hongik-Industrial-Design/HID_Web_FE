import { JSX } from 'react/jsx-runtime';

import { DeleteIcon } from '@icons/Delete';

import * as S from './DeleteCardButton.styled';

type DeleteCardButtonProps = {
  handleCardDelete: () => void;
};

const DeleteCardButton = ({
  handleCardDelete,
}: DeleteCardButtonProps): JSX.Element => {
  return (
    <S.DeleteCardButtonContainer type="button" onClick={handleCardDelete}>
      <DeleteIcon />
    </S.DeleteCardButtonContainer>
  );
};

export default DeleteCardButton;
