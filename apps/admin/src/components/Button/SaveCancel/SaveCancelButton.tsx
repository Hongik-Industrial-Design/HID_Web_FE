import { JSX } from 'react/jsx-runtime';
import { useNavigate } from 'react-router';

import * as S from './SaveCancelButton.styled';

type SaveCancelButtonProps = {
  buttonType: 'save' | 'cancel';
  handleButtonClick?: () => void;
};

const SaveCancelButton = ({
  buttonType,
  handleButtonClick,
}: SaveCancelButtonProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <S.SaveCancelButtonContainer
      $isSaveButton={buttonType === 'save'}
      onClick={buttonType === 'save' ? handleButtonClick : () => navigate(-1)}
    >
      {buttonType === 'save' ? 'Save' : 'Cancel'}
    </S.SaveCancelButtonContainer>
  );
};

export default SaveCancelButton;
