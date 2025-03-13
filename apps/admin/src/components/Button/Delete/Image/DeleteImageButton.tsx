import { JSX } from 'react/jsx-runtime';

import { DeleteIcon } from '@icons/Delete';

import * as S from './DeleteImageButton.styled';

type DeleteImageButtonProps = {
  handleImageDelete: () => void;
  isImageHovered: boolean;
};

const DeleteImageButton = ({
  handleImageDelete,
  isImageHovered,
}: DeleteImageButtonProps): JSX.Element => {
  return (
    <S.DeleteImageButtonContainer
      type="button"
      onClick={handleImageDelete}
      $isImageHovered={isImageHovered}
    >
      <DeleteIcon />
    </S.DeleteImageButtonContainer>
  );
};

export default DeleteImageButton;
